const baseURL = 'https://www.watchcartoononline.io/adventure-time-season-';
const episode_dic = {
    '1': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'],
    '2': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'],
    '3': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19-20', '21', '22', '23', '24', '25', '26'],
    '4': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'],
    '5': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50-51', '52'],
    '6': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43'],
    '7': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14-15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38-39'],
    '8': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    '9': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    '10': ['1', '2', '3', '4', '5', '6', '7', '8']
};

function typeOf(obj) {
    return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}

function getRandomInt(min, max) {
    max += 1; // Make this function inclusive on both max and min
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

chrome.browserAction.onClicked.addListener(function (activeTab) {
    chrome.storage.sync.get(['minSeason', 'maxSeason'], function (sRange) {
        var min = 0,
            max = 0;
        // If the settings haven't been adjusted (no stored variable)
        if (sRange.minSeason == null) {
            min = 1;
            max = Object.keys(episode_dic).length;
        } else {
            min = sRange.minSeason;
            max = sRange.maxSeason;
        }

        var season = getRandomInt(min, max).toString();
        // Get random episode number for the given season
        var episode = episode_dic[season][Math.floor(Math.random() * Object.keys(episode_dic[season]).length)];
        // console.log(season, episode);

        var newURL = baseURL + season + '-episode-' + episode;
        chrome.tabs.create({
            url: newURL
        }); // tab create
    }); // storage Get
}); // Extension onClick
