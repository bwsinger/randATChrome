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
  '9': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
};

function genURL(ed){
  // Get random season key
  var season = (Math.floor(Math.random() * Object.keys(ed).length) + 1).toString();
  // Get random episode number for the given season
  var episode = ed[season][Math.floor(Math.random() * Object.keys(ed[season]).length)];

  return [season, episode];
}

chrome.browserAction.onClicked.addListener(function (activeTab) {
  console.log("Got in")
  const result = genURL(episode_dic);
  const newURL = baseURL + result[0] + '-episode-' + result[1];
  chrome.tabs.create({
    url: newURL
  });
});