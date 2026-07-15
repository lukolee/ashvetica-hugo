document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('lightbox-modal');
    const modalImage = document.getElementById('lightbox-image');
    const modalCaption = document.getElementById('lightbox-caption-text');
    const closeBtn = document.querySelector('.lightbox-close');
    const mediaItems = document.querySelectorAll('.media-item[data-lightbox="image"]');

    // Open lightbox
    mediaItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            const title = this.getAttribute('data-title') || '';
            const alt = this.getAttribute('data-alt') || '';
            const caption = this.getAttribute('data-caption') || '';

            modalImage.src = src;
            modalImage.alt = alt || title || caption;

            const modalTitle = document.getElementById('lightbox-title');
            const modalAlt = document.getElementById('lightbox-alt');

            modalTitle.textContent = title;
            modalAlt.textContent = alt;
            modalCaption.textContent = caption;

            // Hide elements if empty
            modalTitle.style.display = title ? 'block' : 'none';
            modalAlt.style.display = alt ? 'block' : 'none';
            modalCaption.style.display = caption ? 'block' : 'none';

            // Only show the caption panel at all when this image has a caption
            const captionBox = document.querySelector('.lightbox-caption');
            const lightboxContent = document.querySelector('.lightbox-content');
            captionBox.style.display = caption ? 'block' : 'none';
            lightboxContent.classList.toggle('no-caption', !caption);

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    function closeLightbox() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);

    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeLightbox();
        }
    });
});
