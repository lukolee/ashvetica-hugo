---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date.Format "2006-01-02" }}
draft: true
# Hero image displayed on index page
hero_image: "/images/project_assets/hero-image.png"
# Alternative: use image for backward compatibility
# image: "/images/project_assets/image.png"
description: "A brief description"
# Additional media (images/videos) - stored for future use
# This array can contain multiple images and videos
# media:
#   - type: "image"
#     path: "/images/project_assets/image1.png"
#     alt: "Description of image 1"
#   - type: "image"
#     path: "/images/project_assets/image2.png"
#     alt: "Description of image 2"
#   - type: "video"
#     path: "/videos/video1.mp4"
#     alt: "Description of video 1"
#     poster: "/images/project_assets/video1-poster.png"  # Optional: thumbnail/poster image for video
#   - type: "image"
#     path: "/images/project_assets/image3.png"
#     alt: "Description of image 3"
---
