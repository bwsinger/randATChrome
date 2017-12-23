$(document).ready(function () {
    //jQuery(document).ready(function ($) {

    /**
     * Fetch content from background.js
     */
    chrome.runtime.getBackgroundPage(function (bg) {
        const SEASON_MIN = bg.getSeasonMin();
        const SEASON_MAX = bg.getSeasonMax();

        var mySlider = $("#slider1").slider({
            tooltip: "show",
            focus: false
        });

        chrome.storage.sync.get(["minSeason", "maxSeason"], function (sRange) {
            var min = 0,
                max = 0;
            // If the settings haven't been adjusted (no stored variable)
            if (sRange.minSeason == null) {
                min = SEASON_MIN;
                max = SEASON_MAX;
            } else {
                min = sRange.minSeason;
                max = sRange.maxSeason;
            }
            mySlider.slider("setValue", [min, max]);
            $("#sliderValLow").text(min);
            $("#sliderValHigh").text(max);
        });

        mySlider.on("slide", function (slideEvt) {
            let minSeason1 = Math.min(...slideEvt.value);
            let maxSeason1 = Math.max(...slideEvt.value);
            $("#sliderValLow").text(minSeason1);
            $("#sliderValHigh").text(maxSeason1);
            //    console.log(slideEvt.value);
        });

        mySlider.on("slideStop", function (slideEvt) {
            let minSeason = Math.min(...slideEvt.value);
            let maxSeason = Math.max(...slideEvt.value);
            chrome.storage.sync.set({
                minSeason: minSeason,
                maxSeason: maxSeason
            });

            // //Monitor Chrome db changes
            // chrome.storage.onChanged.addListener(function (changes, namespace) {
            //     for (key in changes) {
            //         var storageChange = changes[key];
            //         console.log('Storage key "%s" in namespace "%s" changed. ' +
            //             'Old value was "%s", new value is "%s".',
            //             key,
            //             namespace,
            //             storageChange.oldValue,
            //             storageChange.newValue);
            //     }
            // });
        }); // onSlideStop event
    }); // getBackgroundPage
}); // jQuery
