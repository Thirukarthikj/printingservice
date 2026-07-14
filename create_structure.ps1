$baseDir = "d:\project\printing\printing code\printing-services-website"
New-Item -Path $baseDir -ItemType Directory -Force | Out-Null

$directories = @(
    "assets\css",
    "assets\js",
    "assets\images\logo",
    "assets\images\hero",
    "assets\images\about",
    "assets\images\services",
    "assets\images\gallery",
    "assets\images\clients",
    "assets\images\icons",
    "assets\images\backgrounds",
    "assets\fonts",
    "components"
)

foreach ($dir in $directories) {
    New-Item -Path "$baseDir\$dir" -ItemType Directory -Force | Out-Null
}

$files = @(
    "index.html",
    "about.html",
    "services.html",
    "gallery.html",
    "contact.html",
    "assets\css\style.css",
    "assets\css\navbar.css",
    "assets\css\footer.css",
    "assets\css\home.css",
    "assets\css\about.css",
    "assets\css\services.css",
    "assets\css\gallery.css",
    "assets\css\contact.css",
    "assets\css\responsive.css",
    "assets\css\animations.css",
    "assets\css\variables.css",
    "assets\js\main.js",
    "assets\js\navbar.js",
    "assets\js\hero-slider.js",
    "assets\js\gallery.js",
    "assets\js\filter.js",
    "assets\js\faq.js",
    "assets\js\contact-form.js",
    "assets\js\scroll.js",
    "assets\js\animation.js",
    "assets\images\logo\logo.png",
    "assets\images\logo\logo-white.png",
    "assets\images\logo\favicon.ico",
    "assets\images\hero\hero-banner.jpg",
    "assets\images\hero\hero-printing.webp",
    "assets\images\hero\hero-products.png",
    "assets\images\about\company.jpg",
    "assets\images\about\office.jpg",
    "assets\images\about\printing-machine.jpg",
    "assets\images\services\digital-printing.jpg",
    "assets\images\services\offset-printing.jpg",
    "assets\images\services\business-card.jpg",
    "assets\images\services\brochure.jpg",
    "assets\images\services\flyer.jpg",
    "assets\images\services\flex-banner.jpg",
    "assets\images\services\calendar.jpg",
    "assets\images\services\diary.jpg",
    "assets\images\services\notebook.jpg",
    "assets\images\services\notice-book.jpg",
    "assets\images\services\certificate.jpg",
    "assets\images\services\id-card.jpg",
    "assets\images\services\sticker.jpg",
    "assets\images\services\packaging.jpg",
    "assets\images\services\t-shirt.jpg",
    "assets\images\services\mug.jpg",
    "assets\images\gallery\project-01.jpg",
    "assets\images\gallery\project-02.jpg",
    "assets\images\gallery\project-03.jpg",
    "assets\images\gallery\project-04.jpg",
    "assets\images\gallery\project-05.jpg",
    "assets\images\gallery\project-06.jpg",
    "assets\images\gallery\project-07.jpg",
    "assets\images\gallery\project-08.jpg",
    "assets\images\gallery\project-09.jpg",
    "assets\images\gallery\project-10.jpg",
    "assets\images\clients\client-1.png",
    "assets\images\clients\client-2.png",
    "assets\images\clients\client-3.png",
    "assets\images\clients\client-4.png",
    "components\navbar.html",
    "components\footer.html",
    "components\contact-form.html",
    "components\testimonial-card.html",
    "components\service-card.html",
    "README.md"
)

foreach ($file in $files) {
    New-Item -Path "$baseDir\$file" -ItemType File -Force | Out-Null
}
Write-Output "Structure created successfully."
