export function resolveAssetUrl(url) {
    if (!url || typeof url !== 'string') {
        return '';
    }

    if (/^(https?:)?\/\//i.test(url) || url.startsWith('data:')) {
        return url;
    }

    const publicUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');

    if (url.startsWith('/')) {
        return publicUrl ? `${publicUrl}${url}` : url;
    }

    const normalized = url.replace(/^\.\//, '/');
    return publicUrl ? `${publicUrl}${normalized}` : normalized;
}
