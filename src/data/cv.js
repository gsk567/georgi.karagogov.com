export default {
    data: {
        header: {
            name: 'Georgi Karagogov',
            title: 'Software engineer, geodetic engineer, designer',
            email: 'georgi.karagogov@gmail.com',
            website: 'georgi.karagogov.com',
            mobile: '+359 882 055 121'
        },
        about: {
          born: '07.07.1991',
          from: 'Burgas, Bulgaria',
          livesIn: 'Burgas, Bulgaria'
        },
        workExperience: [
            {
                company: 'Scalefocus AD',
                position: 'Software Engineer',
                fromTo: '01/2021 – Ongoing',
                description: 'Developing and maintaining enterprise software solutions focused on .NET technology and ' +
                    'corresponding front-end technologies.'
            },
            {
                company: 'Codific Ltd.',
                position: 'Software Engineer',
                fromTo: '01/2018 – 01/2021',
                description: 'Developing and maintaining web, desktop and mobile applications ' +
                    'based on C# (ASP.NET, ASP.NET Core, WPF, UWP, Xamarin). Maintaining existing web applications based on ' +
                    'PHP (Zend Framework, Symfony). Design visual identity materials through Adobe Photoshop and ' +
                    'Adobe Illustrator.'
            },
            {
                company: 'Apogee 99 ST',
                position: 'Web Designer',
                fromTo: '04/2017 – 10/2017',
                description: 'Technical maintaining existing e-commerce based on ZenCart. Developing desktop ' +
                    'application for web scraping based on C# (Windows Forms). Design visual identity ' +
                    'materials through Adobe Photoshop and Adobe Illustrator.'
            },
            {
                company: 'ZenitGeo Ltd. / Solitech JSC',
                position: 'Geodetic Engineer',
                fromTo: '03/2016 – 02/2017',
                description: 'Geodetic measurements, 3D LiDAR measurements, 2D/3D processing and GIS analysis based on ' +
                    'whole technology stack of Trimble Navigation. Creation and maintaining processing scripts for ' +
                    'geodetic automation. Professional courses for 3D laser scanners.'
            },
            {
                company: 'EIS Construction Company Ltd.',
                position: 'Geodetic Engineer',
                fromTo: '09/2015 – 02/2016',
                description: 'Geodetic measurements, processing and design.'
            },
            {
                company: 'ESRI Bulgaria',
                position: 'Junior Digitizer',
                fromTo: '08/2015 – 09/2015',
                description: 'Pre-processing and analysis of geospatial data.'
            }
        ],
        education: [
            {
                place: 'UACEG, Sofia, Bulgaria',
                period: '09/2010 – 07/2015',
                title: 'Master Degree of Geodesy'
            },
            {
                place: 'Ghent University',
                period: '02/2015 – 07/2015',
                title: 'Geospatial Specialist via Erasmus+ Exchange Program'
            },
            {
                place: 'Professional High School for Civil Engineering, Architecture and Geodesy',
                period: '09/2005 – 07/2010',
                title: 'Secondary Education'
            }
        ],
        technologies: [
            {
                type: 'Programming Languages',
                items: [
                    'C#', 'MATLAB', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'HTML', 'CSS', 'LESS', 'SASS', 'XAML'
                ]
            },
            {
                type: 'Programming Frameworks',
                items: [
                    '.NET Framework', '.NET Core', '.NET', 'ASP.NET MVC', 'Entity Framework', 'WPF', 'UWP', 'Xamarin', 'Windows Forms', 'jQuery', 'VueJS', 'NuxtJS', 'AngularJS', 'Angular', 'Blazor'
                ]
            },
            {
                type: 'Platforms',
                items: [
                    'WordPress', 'ZenCart'
                ]
            },
            {
                type: 'Web Servers',
                items: [
                    'IIS', 'NGINX', 'Apache'
                ]
            },
            {
                type: 'Operation Systems',
                items: [
                    'Windows', 'Linux', 'MacOS'
                ]
            },
            {
                type: 'Design Software',
                items: [
                    'Adobe Photoshop', 'Adobe Illustrator'
                ]
            },
            {
                type: 'Specialized Software',
                items: [
                    'Autodesk AutoCAD 2D/3D', 'Autodesk Civil3D', 'ESRI ArcGIS', 'QGIS', 'Golden Surfer', 'Agisoft Photoscan', 'CloudCompare', 'Trimble Business Center', 'Trimble RealWorks'
                ]
            },
            {
                type: 'Other',
                items: [
                    'Microsoft Office'
                ]
            }
        ],
        projects: [
            {
                name: 'eCompetitive',
                description: 'Desktop Software for web scraping of e-commerce platforms.',
                url: 'https://ecompetitive.apogee99.com/'
            },
            {
                name: 'PAVEL',
                description: 'Web & Mobile Platform for booking limos and cars.'
            },
            {
                name: 'Videolab',
                description: 'Platform for secure storage of media content.'
            },
            {
                name: 'Codific Video Recorder (CVR) Desktop',
                description: 'Desktop application for video recording, encryption and uploading to Videolab.'
            },
            {
                name: 'Codific Video Recorder (CVR) Mobile',
                description: 'Mobile application for video and audio recording, encryption and uploading to Videolab.'
            },
            {
                name: 'Digipolis E-Invoicing API',
                description: 'Web API for processing invoices.'
            },
            {
                name: 'Codific Video Recorder (CVR) UWP',
                description: 'Desktop application for video recording, encryption and uploading to Videolab.'
            },
            {
                name: 'MatchMaker',
                description: 'Web application for matching people through specific matching algorithm.'
            },
            {
                name: 'Gazeto',
                description: 'Web application for doctors surveys about sensitive data collection and structuring.'
            },
            {
                name: 'Emeraude',
                description: 'A lightweight ASP.NET framework for creating successful products.',
                url: 'https://emeraude.dev/',
                personal: true
            },
            {
                name: 'STRONGER.BG',
                description: 'Web application (Emeraude based) for storing and managing workout assets.',
                url: 'https://stronger.bg/',
                personal: true
            },
            {
                name: 'Post Settlement',
                description: 'Web application for processing money flows.'
            },
        ],
        languages: [
            {
                name: 'Bulgarian',
                level: 'Native'
            },
            {
                name: 'English',
                level: 'B2'
            }
        ],
        certificates: [
            {
                title: 'Microsoft Software Development Fundamentals (98-361)',
                issuer: 'Microsoft in 2017'
            },
            {
                title: 'Train the Trainers',
                issuer: 'Software University, Sofia in 2016.'
            },
            {
                title: 'Photoshop Certificate – Advanced',
                issuer: 'ICCD, Burgas in 2007'
            }
        ],
        events: [
            {
                name: 'Digital marketing tracking systems (Course for entrepreneurs) @ Business Incubator, Burgas',
                represent: 'Business Incubator, Burgas',
                period: '2019-2020'
            },
            {
                name: 'HTML & CSS Course @ Business Incubator, Burgas',
                represent: 'Business Incubator, Burgas',
                period: '2019'
            },
            {
                name: 'WordPress Single Day Workshop @ Business Incubator, Burgas',
                represent: 'Business Incubator, Burgas',
                period: '2019'
            },
            {
                name: 'Smart Start with ASP.NET Core mvc567 @ Business Incubator, Burgas',
                represent: 'Georgi Karagogov',
                period: '2019'
            },
            {
                name: 'ASP.NET Core with Vue summer course @ Burgas University',
                represent: 'Codific Ltd.',
                period: '2019'
            },
            {
                name: 'Work smart with Matlab @ Software University',
                represent: 'Georgi Karagogov',
                period: '2016'
            },
            {
                name: 'Practical development - 3D Laser Scanning @ Software University',
                represent: 'Georgi Karagogov',
                period: '2016'
            },
            {
                name: 'Success conception @ Technical Conference, Plovdiv ',
                represent: 'Solitech JSC',
                period: '2016'
            },
            {
                name: 'MI 3D NIR Scanner Education @ Bulgaria',
                represent: 'Solitech JSC',
                period: '2016-2017'
            }
        ]
    }
}
