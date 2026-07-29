type VisitorPayload = {
    timestamp: string;
    ip?: string;
    city?: string;
    region?: string;
    country?: string;
    org?: string;
    isp?: string;
    browser?: string;
    platform?: string;
    language?: string;
    screen?: string;
    userAgent?: string;
    referrer?: string;
    pathname?: string;
};

const WEBHOOK_URL = process.env.REACT_APP_VISITOR_WEBHOOK_URL || '';
const EMAIL_ADDRESS = 'rasib.dev03@gmail.com';
const TRACKED_KEY = 'portfolio-visitor-tracked';

function getDeviceDetails() {
    const navigatorRef = window.navigator;
    const uaData = (navigatorRef as Navigator & { userAgentData?: { platform?: string; brands?: Array<{ brand: string; version: string }> } }).userAgentData;

    const browser = uaData?.brands?.map((item) => `${item.brand} ${item.version}`).join(', ') || navigatorRef.userAgent;
    const platform = uaData?.platform || navigatorRef.platform || 'Unknown';

    return {
        browser,
        platform,
        language: navigatorRef.language || 'Unknown',
        screen: `${window.screen.width}x${window.screen.height}`,
        userAgent: navigatorRef.userAgent,
        referrer: document.referrer || 'Direct',
        pathname: window.location.pathname,
    };
}

function formatVisitorPayload(data: VisitorPayload) {
    return {
        timestamp: data.timestamp,
        location: {
            ip: data.ip || 'Unknown',
            city: data.city || 'Unknown',
            region: data.region || 'Unknown',
            country: data.country || 'Unknown',
            organization: data.org || data.isp || 'Unknown',
        },
        device: {
            browser: data.browser || 'Unknown',
            platform: data.platform || 'Unknown',
            language: data.language || 'Unknown',
            screen: data.screen || 'Unknown',
            referrer: data.referrer || 'Direct',
            pathname: data.pathname || '/',
        },
    };
}

function sendEmailNotification(payload: Record<string, unknown>) {
    const subject = encodeURIComponent('New portfolio visitor detected');
    const body = encodeURIComponent(`Visitor details:\n\n${JSON.stringify(payload, null, 2)}`);
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
}

export async function trackVisitor() {
    if (typeof window === 'undefined') return;

    if (sessionStorage.getItem(TRACKED_KEY) === 'true') return;

    sessionStorage.setItem(TRACKED_KEY, 'true');

    const deviceDetails = getDeviceDetails();

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        const payload = formatVisitorPayload({
            timestamp: new Date().toISOString(),
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country_name,
            org: data.org,
            isp: data.org,
            ...deviceDetails,
        });

        console.log('[Visitor Tracker]', payload);

        if (WEBHOOK_URL && !WEBHOOK_URL.includes('YOUR_WEBHOOK_URL')) {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
        } else {
            sendEmailNotification(payload);
        }
    } catch (error) {
        const fallbackPayload = formatVisitorPayload({
            timestamp: new Date().toISOString(),
            ...deviceDetails,
        });

        console.log('[Visitor Tracker] Unable to resolve IP details. Fallback payload:', fallbackPayload);

        if (WEBHOOK_URL && !WEBHOOK_URL.includes('YOUR_WEBHOOK_URL')) {
            try {
                await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(fallbackPayload),
                });
            } catch (postError) {
                console.warn('[Visitor Tracker] Webhook delivery failed.', postError);
                sendEmailNotification(fallbackPayload);
            }
        } else {
            sendEmailNotification(fallbackPayload);
        }
    }
}
