// All available time zones
const allTimeZones = [
    // Asia
    { name: 'Tokyo', timezone: 'Asia/Tokyo', emoji: '🇯🇵' },
    { name: 'Bangkok', timezone: 'Asia/Bangkok', emoji: '🇹🇭' },
    { name: 'Hong Kong', timezone: 'Asia/Hong_Kong', emoji: '🇭🇰' },
    { name: 'Shanghai', timezone: 'Asia/Shanghai', emoji: '🇨🇳' },
    { name: 'Singapore', timezone: 'Asia/Singapore', emoji: '🇸🇬' },
    { name: 'Manila', timezone: 'Asia/Manila', emoji: '🇵🇭' },
    { name: 'Seoul', timezone: 'Asia/Seoul', emoji: '🇰🇷' },
    { name: 'Dubai', timezone: 'Asia/Dubai', emoji: '🇦🇪' },
    { name: 'Kolkata', timezone: 'Asia/Kolkata', emoji: '🇮🇳' },
    { name: 'Bangkok', timezone: 'Asia/Bangkok', emoji: '🇹🇭' },
    { name: 'Jakarta', timezone: 'Asia/Jakarta', emoji: '🇮🇩' },
    
    // Europe
    { name: 'London', timezone: 'Europe/London', emoji: '🇬🇧' },
    { name: 'Paris', timezone: 'Europe/Paris', emoji: '🇫🇷' },
    { name: 'Berlin', timezone: 'Europe/Berlin', emoji: '🇩🇪' },
    { name: 'Rome', timezone: 'Europe/Rome', emoji: '🇮🇹' },
    { name: 'Madrid', timezone: 'Europe/Madrid', emoji: '🇪🇸' },
    { name: 'Amsterdam', timezone: 'Europe/Amsterdam', emoji: '🇳🇱' },
    { name: 'Brussels', timezone: 'Europe/Brussels', emoji: '🇧🇪' },
    { name: 'Vienna', timezone: 'Europe/Vienna', emoji: '🇦🇹' },
    { name: 'Prague', timezone: 'Europe/Prague', emoji: '🇨🇿' },
    { name: 'Moscow', timezone: 'Europe/Moscow', emoji: '🇷🇺' },
    { name: 'Istanbul', timezone: 'Europe/Istanbul', emoji: '🇹🇷' },
    { name: 'Athens', timezone: 'Europe/Athens', emoji: '🇬🇷' },
    
    // Americas
    { name: 'New York', timezone: 'America/New_York', emoji: '🇺🇸' },
    { name: 'Los Angeles', timezone: 'America/Los_Angeles', emoji: '🇺🇸' },
    { name: 'Chicago', timezone: 'America/Chicago', emoji: '🇺🇸' },
    { name: 'Denver', timezone: 'America/Denver', emoji: '🇺🇸' },
    { name: 'Mexico City', timezone: 'America/Mexico_City', emoji: '🇲🇽' },
    { name: 'Toronto', timezone: 'America/Toronto', emoji: '🇨🇦' },
    { name: 'Vancouver', timezone: 'America/Vancouver', emoji: '🇨🇦' },
    { name: 'São Paulo', timezone: 'America/Sao_Paulo', emoji: '🇧🇷' },
    { name: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', emoji: '🇦🇷' },
    { name: 'Santiago', timezone: 'America/Santiago', emoji: '🇨🇱' },
    { name: 'Bogotá', timezone: 'America/Bogota', emoji: '🇨🇴' },
    { name: 'Lima', timezone: 'America/Lima', emoji: '🇵🇪' },
    
    // Oceania
    { name: 'Sydney', timezone: 'Australia/Sydney', emoji: '🇦🇺' },
    { name: 'Melbourne', timezone: 'Australia/Melbourne', emoji: '🇦🇺' },
    { name: 'Auckland', timezone: 'Pacific/Auckland', emoji: '🇳🇿' },
    { name: 'Fiji', timezone: 'Pacific/Fiji', emoji: '🇫🇯' },
    
    // Africa
    { name: 'Cairo', timezone: 'Africa/Cairo', emoji: '🇪🇬' },
    { name: 'Lagos', timezone: 'Africa/Lagos', emoji: '🇳🇬' },
    { name: 'Johannesburg', timezone: 'Africa/Johannesburg', emoji: '🇿🇦' },
    { name: 'Nairobi', timezone: 'Africa/Nairobi', emoji: '🇰🇪' },
    { name: 'Casablanca', timezone: 'Africa/Casablanca', emoji: '🇲🇦' },
];

// State
let selectedTimeZones = [
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo'
];
let is24HourFormat = false;
let isDarkTheme = true;

// DOM Elements
const clocksContainer = document.getElementById('clocks-container');
const addTimeZoneBtn = document.getElementById('add-timezone-btn');
const toggleFormatBtn = document.getElementById('toggle-format-btn');
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const modal = document.getElementById('timezone-modal');
const closeBtn = document.querySelector('.close');
const timezoneSearch = document.getElementById('timezone-search');
const timezoneList = document.getElementById('timezone-list');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    populateTimezoneList();
    renderClocks();
    updateClocks();
    setInterval(updateClocks, 1000);

    // Event listeners
    addTimeZoneBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    toggleFormatBtn.addEventListener('click', toggleFormat);
    toggleThemeBtn.addEventListener('click', toggleTheme);
    timezoneSearch.addEventListener('input', filterTimezones);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});

// Populate timezone list
function populateTimezoneList() {
    timezoneList.innerHTML = '';
    allTimeZones.forEach(tz => {
        const option = document.createElement('div');
        option.className = 'timezone-option';
        option.textContent = `${tz.emoji} ${tz.name} (${tz.timezone})`;
        option.addEventListener('click', () => addTimeZone(tz.timezone));
        timezoneList.appendChild(option);
    });
}

// Filter timezones
function filterTimezones(e) {
    const searchTerm = e.target.value.toLowerCase();
    const options = timezoneList.querySelectorAll('.timezone-option');
    
    options.forEach(option => {
        if (option.textContent.toLowerCase().includes(searchTerm)) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
}

// Open modal
function openModal() {
    modal.classList.add('show');
    timezoneSearch.focus();
}

// Close modal
function closeModal() {
    modal.classList.remove('show');
    timezoneSearch.value = '';
    populateTimezoneList();
}

// Add timezone
function addTimeZone(timezone) {
    if (!selectedTimeZones.includes(timezone)) {
        selectedTimeZones.push(timezone);
        renderClocks();
        closeModal();
        savePreferences();
    }
}

// Remove timezone
function removeTimeZone(timezone) {
    selectedTimeZones = selectedTimeZones.filter(tz => tz !== timezone);
    renderClocks();
    savePreferences();
}

// Toggle 12/24 hour format
function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    toggleFormatBtn.textContent = is24HourFormat ? '24 Hour' : '12 Hour';
    savePreferences();
}

// Toggle theme
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    applyTheme();
    savePreferences();
}

// Apply theme
function applyTheme() {
    if (isDarkTheme) {
        document.body.classList.remove('light-theme');
        toggleThemeBtn.textContent = 'Dark/Light Theme';
    } else {
        document.body.classList.add('light-theme');
    }
}

// Load theme
function loadTheme() {
    const savedTheme = localStorage.getItem('clockTheme');
    if (savedTheme === 'light') {
        isDarkTheme = false;
        applyTheme();
    }
}

// Render clocks
function renderClocks() {
    clocksContainer.innerHTML = '';
    
    if (selectedTimeZones.length === 0) {
        clocksContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h2>No Time Zones Selected</h2>
                <p>Click the "+ Add Time Zone" button to start tracking different time zones.</p>
            </div>
        `;
        return;
    }

    selectedTimeZones.forEach(timezone => {
        const card = createClockCard(timezone);
        clocksContainer.appendChild(card);
    });
}

// Create clock card
function createClockCard(timezone) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.innerHTML = `
        <div class="clock-header">
            <div class="timezone-info">
                <h2>${getTimezoneName(timezone)}</h2>
                <p>${timezone}</p>
            </div>
            <button class="remove-btn" onclick="removeTimeZone('${timezone}')">✕</button>
        </div>
        <div class="digital-display">
            <div class="time-display" data-timezone="${timezone}">00:00:00</div>
            <div class="period" data-period="${timezone}"></div>
        </div>
        <div class="clock-info">
            <div class="info-box">
                <div class="info-label">Date</div>
                <div class="info-value" data-date="${timezone}">-</div>
            </div>
            <div class="info-box">
                <div class="info-label">Day</div>
                <div class="info-value" data-day="${timezone}">-</div>
            </div>
        </div>
    `;
    return card;
}

// Get timezone name
function getTimezoneName(timezone) {
    const tz = allTimeZones.find(t => t.timezone === timezone);
    return tz ? `${tz.emoji} ${tz.name}` : timezone;
}

// Update clocks
function updateClocks() {
    selectedTimeZones.forEach(timezone => {
        updateClockDisplay(timezone);
    });
}

// Update single clock
function updateClockDisplay(timezone) {
    const timeDisplay = document.querySelector(`[data-timezone="${timezone}"]`);
    const dateDisplay = document.querySelector(`[data-date="${timezone}"]`);
    const dayDisplay = document.querySelector(`[data-day="${timezone}"]`);
    const periodDisplay = document.querySelector(`[data-period="${timezone}"]`);

    if (!timeDisplay) return;

    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !is24HourFormat,
    });

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    const parts = formatter.formatToParts(now);
    let time = '';
    let period = '';

    parts.forEach(part => {
        if (part.type === 'literal' && part.value === ':') {
            time += ':';
        } else if (part.type !== 'literal') {
            time += part.value;
        }
        if (part.type === 'dayPeriod') {
            period = part.value;
        }
    });

    const fullDate = dateFormatter.format(now);
    const [dayName, ...dateParts] = fullDate.split(',');

    timeDisplay.textContent = time;
    dateDisplay.textContent = dateParts.join(',').trim();
    dayDisplay.textContent = dayName.trim();
    if (periodDisplay) {
        periodDisplay.textContent = period;
    }
}

// Save preferences to localStorage
function savePreferences() {
    localStorage.setItem('selectedTimeZones', JSON.stringify(selectedTimeZones));
    localStorage.setItem('is24HourFormat', JSON.stringify(is24HourFormat));
    localStorage.setItem('clockTheme', isDarkTheme ? 'dark' : 'light');
}

// Load preferences from localStorage
function loadPreferences() {
    const saved = localStorage.getItem('selectedTimeZones');
    if (saved) {
        selectedTimeZones = JSON.parse(saved);
    }
    
    const format = localStorage.getItem('is24HourFormat');
    if (format) {
        is24HourFormat = JSON.parse(format);
        toggleFormatBtn.textContent = is24HourFormat ? '24 Hour' : '12 Hour';
    }
}

// Load preferences on page load
loadPreferences();

console.log('Multi-timezone clock initialized successfully!');
