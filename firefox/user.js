// Home Page and New Window
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");

user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);


user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

user_pref("extensions.update.enabled", false);

user_pref("dom.ipc.processCount", 12);

user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// Disable sponsored content on Firefox Home & Clear default topsites
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

user_pref("signon.autofillForms", false);
user_pref("signon.rememberSignons", false);
user_pref("browser.formfill.enable", false);

user_pref("browser.sessionstore.max_tabs_undo", 0);

user_pref("extensions.pocket.enabled", false);

user_pref("layers.acceleration.force-enabled", true);
user_pref("gfx.webrender.all", true);

user_pref("browser.sessionstore.resume_from_crash", false);
