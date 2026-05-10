export const projectsData = [
    {
        id: "fittrack",
        title: "FitTrack+",
        description: "Built from the ground up with Flutter, FitTrack+ delivers buttery-smooth performance, stunning visuals, and lightning-fast syncing across Android. The clean, modern interface feels premium yet simple enough for anyone to master in minutes.",
        image: [
            "/assets/images/ft1.webp",
            "/assets/images/ft2.webp",
            "/assets/images/ft3.webp"
        ],
        features: ["📊 BMI Monitoring", "🎯 Daily Targets & Activity Status", "🥤🍎 Water & Calorie Intake Tracking", "😴 Sleep Tracking", "🏃‍♂️ Workout Progress & Latest Workouts", "🍽️ Meal Planning & Scheduling"],
        github: "https://github.com/RASIB20/health_tracker",
        apk: "/downloads/fittrack.apk",
        stack: ["Flutter", "Firebase", "Dart"]
    },

    {
        id: "mytelenor",
        title: "MyTelenor Clone",
        description: "My Telenor app clone built with Flutter! 🔥 A fully functional telecom app featuring Stripe payments, secure Firebase authentication, a locally hosted backend server, and real-time push notifications with FCM. Clean UI, fast performance, and production-ready features — just like the original MyTelenor app.",
        image: [
            "/assets/images/mt1.webp",
            "/assets/images/mt2.webp",
            "/assets/images/mt3.webp",
            "/assets/images/mt4.webp",
            "/assets/images/mt5.webp",
            "/assets/images/mt6.webp",
            "/assets/images/mt7.webp",
            "/assets/images/mt8.webp",
            "/assets/images/mt9.webp",
        ],
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
    ,
    {
        id: "graphoinsights",
        title: "GraphoInsights",
        description: "GraphoInsights is a professional Flutter application built as a Final Year Project for graphologists — specialists who analyze handwriting to uncover psychological traits and personality patterns. The app provides a complete client management system with real-time data sync, secure per-user authentication, and a clean, intuitive interface designed for professional use. Built on Clean Architecture principles, it separates concerns across data, domain, and presentation layers — making it highly scalable, testable, and maintainable. Every feature, from composite-indexed Firestore queries to BLoC-driven state management, was engineered for real-world performance.",
        image: [
            "/assets/images/home_fyp.webp",
            "/assets/images/second_fyp.webp",
        ],
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
    }


];