        // Sidebar Navigation
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Toggle Switches
        document.querySelectorAll('.toggle-switch').forEach(toggle => {
            toggle.addEventListener('click', function() {
                this.classList.toggle('active');
                const toggleId = this.dataset.toggle;
                
                // Update visualizer when aimbot is toggled
                if (toggleId === 'aimbot') {
                    const character = document.getElementById('character');
                    const targetLock = document.getElementById('target-lock');
                    if (this.classList.contains('active')) {
                        character.style.opacity = '1';
                        targetLock.textContent = 'ENGAGED';
                        targetLock.style.color = 'var(--color-primary)';
                        character.querySelector('.character-head').classList.add('pulse');
                    } else {
                        character.style.opacity = '0.5';
                        targetLock.textContent = 'OFFLINE';
                        targetLock.style.color = '#ef4444';
                        character.querySelector('.character-head').classList.remove('pulse');
                    }
                }
                
                // Update character visibility when "Visible Only" is toggled
                if (toggleId === 'visibleonly') {
                    const character = document.getElementById('character');
                    character.style.opacity = this.classList.contains('active') ? '1' : '0.5';
                }
            });
        });

        // Sliders
        const fovSlider = document.getElementById('fov-slider');
        const fovValue = document.getElementById('fov-value');
        const fovCircle = document.getElementById('fov-circle');
        const smoothSlider = document.getElementById('smooth-slider');
        const smoothValue = document.getElementById('smooth-value');

        fovSlider.addEventListener('input', function() {
            const val = this.value;
            fovValue.textContent = val + '°';
            fovCircle.style.width = (val * 3) + 'px';
            fovCircle.style.height = (val * 3) + 'px';
        });

        smoothSlider.addEventListener('input', function() {
            smoothValue.textContent = this.value + 'ms';
        });

        // Initialize aimbot as active
        document.querySelector('[data-toggle="aimbot"]').classList.add('active');
        document.querySelector('[data-toggle="ignorebots"]').classList.add('active');
        document.querySelector('[data-toggle="ignoreknocked"]').classList.add('active');
        document.querySelector('[data-toggle="visibleonly"]').classList.add('active');
        document.querySelector('[data-toggle="ignorevehicle"]').classList.add('active');