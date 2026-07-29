import biteiqBanner1 from './assets/images/bibanner1.webp';
import biteiqBanner2 from './assets/images/bibanner2.webp';
import mtbanner1 from './assets/images/mtbanner1.webp';
import mtbanner2 from './assets/images/mtbanner2.webp';
import ftbanner1 from './assets/images/ftbanner1.webp';
import ftbanner2 from './assets/images/ftbanner2.webp';
import bi1 from './assets/images/bi1.webp';
import bi2 from './assets/images/bi2.webp';
import bi3 from './assets/images/bi3.webp';
import bi4 from './assets/images/bi4.webp';
import bi5 from './assets/images/bi5.webp';
import bi6 from './assets/images/bi6.webp';
import gbanner1 from './assets/images/gbanner1.webp';
import gbanner2 from './assets/images/gbanner2.webp';

export const projectsData = [
    {
        id: "fittrack",
        title: "FitTrack+",
        description: "Built from the ground up with Flutter, FitTrack+ delivers buttery-smooth performance, stunning visuals, and lightning-fast syncing across Android. The clean, modern interface feels premium yet simple enough for anyone to master in minutes.",
        image: ftbanner1,
        heroImage: ftbanner1,
        featureImage: ftbanner2,
        galleryImages: [ftbanner1, ftbanner2],
        features: ["📊 BMI Monitoring", "🎯 Daily Targets & Activity Status", "🥤🍎 Water & Calorie Intake Tracking", "😴 Sleep Tracking", "🏃‍♂️ Workout Progress & Latest Workouts", "🍽️ Meal Planning & Scheduling"],
        github: "https://github.com/RASIB20/health_tracker",
        apk: "/downloads/fittrack.apk",
        stack: ["Flutter", "Bloc", "Firebase", "Dart"]
    },

    {
        id: "mytelenor",
        title: "MyTelenor Clone",
        description: "My Telenor app clone built with Flutter! 🔥 A fully functional telecom app featuring Stripe payments, secure Firebase authentication, a locally hosted backend server, and real-time push notifications with FCM. Clean UI, fast performance, and production-ready features — just like the original MyTelenor app.",
        image: mtbanner1,
        heroImage: mtbanner1,
        featureImage: mtbanner2,
        galleryImages: [mtbanner1, mtbanner2],
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
        stack: ["Flutter", "Bloc", "Firebase", "Stripe", "FCM", "Dart"]
    }
    ,
    {
        id: "graphoinsights",
        title: "GraphoInsights",
        description: "GraphoInsights is a professional Flutter application built as a Final Year Project for graphologists — specialists who analyze handwriting to uncover psychological traits and personality patterns. The app provides a complete client management system with real-time data sync, secure per-user authentication, and a clean, intuitive interface designed for professional use. Built on Clean Architecture principles, it separates concerns across data, domain, and presentation layers — making it highly scalable, testable, and maintainable. Every feature, from composite-indexed Firestore queries to BLoC-driven state management, was engineered for real-world performance.",
        image: gbanner1,
        heroImage: gbanner1,
        featureImage: gbanner2,
        galleryImages: [gbanner1, gbanner2],
        features: [
            "👤 Client Management — Full CRUD with real-time updates",
            "🖋️ Handwriting-based Psychological Trait Analysis",
            "☁️ Real-time Sync with Firebase & Supabase",
            "🔐 Secure Authentication with user-specific data isolation",
            "⚡ Optimized Firestore queries with Composite Indexing",
            "🏗️ Clean Architecture — Data, Domain & Presentation layers",
            "📊 Structured psychological reports per client",
        ],
        github: "https://github.com/Rasib03/graphoInsights",
        apk: "/downloads/graphoinsights.apk",
        stack: ["Flutter", "Dart", "Firebase", "Supabase", "BLoC", "Clean Architecture"]
    },
    {
        id: "biteiq",
        title: "BiteIQ",
        tagline: "AI-Powered Food Recognition & Nutritional Analysis Platform",
        description: "BiteIQ is an AI-powered food recognition and nutritional analysis platform built with Flutter, Dart, and BLoC. It combines computer vision AI with Firebase/Cloud Storage to identify meals, deliver calorie insights, and track wellness goals with polished mobile UI.",
        heroImage: biteiqBanner1,
        featureImage: biteiqBanner2,
        galleryImages: [bi1, bi2, bi3, bi4, bi5, bi6],
        features: [
            "🤖 AI-powered food recognition",
            "🍎 Nutrition breakdown & macronutrient insights",
            "📸 Camera scan workflow with mobile-first UI",
            "📚 Meal history logging & progress tracking",
            "📊 Analytics charts for wellness goals",
            "☁️ Firebase-backed storage and sync"
        ],
        github: "https://github.com/Rasib03/BiteIQ.git",
        stack: ["Flutter", "Dart", "Getx", "Gemini Vision AI", "Firebase/Cloud Storage"],
        tags: ["AI", "Nutrition", "Mobile", "Health"]
    }


];