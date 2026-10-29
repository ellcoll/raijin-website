/* ==========================================================================
   Raijin BJJ Hanoi - Shared Footer Component
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('site-footer');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h4>Raijin BJJ Hanoi</h4>
                    <p>Brazilian Jiu-Jitsu training community located in Hanoi, Vietnam. Welcoming practitioners of all experience levels.</p>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="beginners.html">New to BJJ?</a></li>
                        <li><a href="timetable.html">Timetable</a></li>
                        <li><a href="visiting-hanoi.html">Visiting Hanoi</a></li>
                        <li><a href="visiting-hanoi.html#pricing">Rates & Pricing</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Connect</h4>
                    <p><strong>Facebook:</strong> <a href="https://www.facebook.com/p/Raijin-BJJ-Hanoi-61571395554069/" target="_blank" rel="noopener" style="text-decoration: underline;">Raijin BJJ Hanoi</a></p>
                    <p><strong>Messenger:</strong> <a href="https://m.me/61571395554069" target="_blank" rel="noopener" style="text-decoration: underline;">Chat on Messenger</a></p>
                    <p><strong>Address:</strong> <a href="https://www.google.com/maps/search/?api=1&query=Raijin+BJJ+Hanoi+88A+Ngo+374+Au+Co+Ha+Noi" target="_blank" rel="noopener" style="text-decoration: underline;">88A Ngõ 374 Âu Cơ</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Raijin BJJ Hanoi. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
});