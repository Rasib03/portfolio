import ft1 from './assets/images/ft1.webp';
import ft2 from './assets/images/ft2.webp';
import ft3 from './assets/images/ft3.webp';
import mt1 from './assets/images/mt1.webp';
import mt2 from './assets/images/mt2.webp';
import mt3 from './assets/images/mt3.webp';
import mt4 from './assets/images/mt4.webp';
import mt5 from './assets/images/mt5.webp';
import mt6 from './assets/images/mt6.png';
import mt7 from './assets/images/mt7.png';
import mt8 from './assets/images/mt8.png';
import mt9 from './assets/images/mt9.png';

export const projectsData = [
    {
        id: "fittrack",
        title: "FitTrack+",
        description: "Built from the ground up with Flutter, FitTrack+ delivers buttery-smooth performance, stunning visuals, and lightning-fast syncing across Android. The clean, modern interface feels premium yet simple enough for anyone to master in minutes.",
        image: [ft1, ft2, ft3],
        features: ["📊 BMI Monitoring", "🎯 Daily Targets & Activity Status", "🥤🍎 Water & Calorie Intake Tracking", "😴 Sleep Tracking", "🏃‍♂️ Workout Progress & Latest Workouts", "🍽️ Meal Planning & Scheduling"],
        github: "https://github.com/RASIB20/health_tracker",
        apk: "/downloads/fittrack.apk",
        stack: ["Flutter", "Firebase", "Dart"]
    },

    {
        id: "mytelenor",
        title: "MyTelenor Clone",
        description: "My Telenor app clone built with Flutter! 🔥 A fully functional telecom app featuring Stripe payments, secure Firebase authentication, a locally hosted backend server, and real-time push notifications with FCM. Clean UI, fast performance, and production-ready features — just like the original MyTelenor app.",
        image: [mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8, mt9],
        features: [
            "🔐 Firebase Authentication",
            "💳 Stripe Payment Integration",
            "🔔 FCM Push Notifications",
            "📶 Balance & Package Management",
            "💰 Instant Recharge & Bill Payments",
            "📦 Subscription Plans",
            "📡 Real-time Data Sync"
        ],
        github: "https://github.com/Rasib03/MyTelenorClone",
        apk: "/downloads/mytelenor.apk",
        stack: ["Flutter", "Firebase", "Stripe", "FCM", "Dart"]
    }


];