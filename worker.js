// worker.js - Pure Fuel Core Computational Engine

self.onmessage = function (e) {
    const { soundingLiters, vcf, density } = e.data;

    // --- STEP 1: Corrected Volume Formula ---
    // Observed Volume (A) taken directly from input
    const observedVolume = soundingLiters;
    // Corrected Volume (B) = Observed Volume (A) * VCF
    const correctedVolume = observedVolume * vcf;

    // --- STEP 2: Mass Calculation Formula ---
    // Mass in Kg (C) = Corrected Volume (B) * Density
    const massKg = correctedVolume * density;
    // Convert to Metric Tons (Tons = Kg / 1000)
    const massTons = massKg / 1000;

    // Build processing payload data package
    const outputReport = {
        observedVolume: observedVolume,
        correctedVolume: correctedVolume,
        massKg: massKg,
        massTons: massTons
    };

    // Dispatch payload back to UI thread
    self.postMessage(outputReport);
};