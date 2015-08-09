

//The different variables
//Misc
var save = document.getElementById("saveStatus");

//Clicks
var bits = 0;

//Units of storage
var byte = 8;
var unit = 1024;
var kilobyte = byte * unit;
var megabyte = kilobyte * unit;
var gigabyte = megabyte * unit;
var terabyte = gigabyte * unit;

//Upgrades
var count = document.getElementById("count");
var upgradeResult = document.getElementById("upgradeResult");
var notEnough = "I'm sorry, you don't have enough bits";

//UpgradeOne:  Floppy disk
var floppyDisk = 0;
var amountFloppyDisk = document.getElementById("floppyDisk");
var cost1 = 8 * byte;
var cost1Tag = document.getElementById("one");
var bitFloppyDisk = byte;
var desCost1 = document.getElementById("costOne");

//UpgradeTwo:  Windows 98
var win98 = 0;
var amountWin98 = document.getElementById("win98");
var cost2 = 100 * byte;
var cost2Tag = document.getElementById("two");
var bitWin98 = unit;
var desCost2 = document.getElementById("costTwo");

//UpgradeThree:  Entry Level Programmer (ELP)
var ELP = 0;
var amountELP = document.getElementById("ELP");
var cost3 = megabyte;
var cost3Tag = document.getElementById("three");
var bitELP = kilobyte;
var desCost3 = document.getElementById("costThree");

//UpgradeFour:  Windows 7
var win7 = 0;
var amountWin7 = document.getElementById("win7");
var cost4 = gigabyte;
var cost4Tag = document.getElementById("four");
var bitWin7 = megabyte;
var desCost4 = document.getElementById("costFour");

//UpgradeFive:  Flash Memory
var flashMem = 0;
var amountFlashMem = document.getElementById("flashMem");
var cost5 = 50 * gigabyte;
var cost5Tag = document.getElementById("five");
var bitFlashMem = gigabyte;
var desCost5 = document.getElementById("costFive");

//EpicUpgrade:  Mr. Bulloch
var bulloch = 0;
var amountBulloch = document.getElementById("bulloch");
var costB = 1000 * terabyte;
var costBTag = document.getElementById("epic");
var bitBulloch = 10 * terabyte;
var desCostEpic = document.getElementById("costEpic");

//Internet
var internet = 0;
var amountInternet = document.getElementById("last");
var costI = 4200 * terabyte;
var costITag = document.getElementById("internet");
var bitInternet = 100000 * terabyte;
var desCostLast = document.getElementById("costLast");

//Functions
//Tick
var tick = function() {
	bits += (floppyDisk * bitFloppyDisk) + (win98 * bitWin98) + (ELP * bitELP) + (win7 * bitWin7) + (flashMem * bitFlashMem);// + (internet * bitInternet);
	var converted = convert(bits);
	count.innerHTML = converted;
	console.log(converted)
};

//Cookie functions
var clearSaveStatus = function() {
	save.innerHTML = "";
};

var autoSave = function() {
	save.innerHTML = "You game has been saved";
	setTimeout(clearSaveStatus, 5000);
};

var manualSave = function() {
	document.cookie = "cookie=yes";
	alert("Manually Saved!");
};

var deleteSave = function() {
	delSave = confirm("Do you wish to delete your save?");
	if (delSave === true) {
		alert("Save deleted!");
	} else {
		alert("Delete aborted!");
	};
};

var cookieReader = function() {
	var x = document.cookie;
	console.log(x);
}

//Convert bits to bytes and so on
var convert = function(bits) {
  var outputString = "";
  if (bits < 8) {
    outputString = bits + " bits";
	} else if (bits >= (terabyte * 128)) {
		bits = Math.floor(bits / terabyte)
		outputString = bits + " terabytes";
	} else if (bits >= (gigabyte * 128)) {
		bits = Math.floor(bits / gigabyte)
		outputString = bits + " gigabytes";
	} else if (bits >= (megabyte * 128)) {
		bits = Math.floor(bits / megabyte);
		outputString = bits + " megabytes";
	} else if (bits >= (kilobyte * 128)) {
		bits = Math.floor(bits / kilobyte);
		outputString = bits + " kilobytes";
	} else if (bits >= byte) {
		bits = Math.floor(bits / byte);
		outputString = bits + " bytes";
	};
	return outputString;
};

var convertC = function(costC) {
	var outputString = "";
	if (costC < 8) {
		outputString = "Cost: " + costC + " bits";
	} else if (costC >= (terabyte * 128)) {
		costC = Math.floor(costC / terabyte);
		outputString = "Cost: " + costC + " TB";
	} else if (costC >= (gigabyte * 128)) {
		costC = Math.floor(costC / gigabyte);
		outputString = "Cost: " + costC + " GB";
	} else if (costC >= (megabyte * 128)) {
		costC = Math.floor(costC / megabyte);
		outputString = "Cost: " + costC + " MB";
	} else if (costC >= (kilobyte * 128)) {
		costC = Math.floor(costC / kilobyte);
		outputString = "Cost: " + costC + " KB";
	} else if (costC >= byte) {
		costC = Math.floor(costC / byte);
		outputString = "Cost: " + costC + " bytes";
	};
	return outputString;
};

//addOne function adds one to bits for each click
var addOne = function() {
	bits++;
	var converted = convert(bits);
	console.log(converted);
	count.innerHTML = converted;
};

//upgradeOne: Floppy Disk
var upgradeOne = function() {
	if (bits < cost1) {
		upgradeResult.innerHTML = notEnough;
	} else {
		bits = bits - cost1;
		floppyDisk++;
		var converted = convert(bits);
		count.innerHTML = converted;
		amountFloppyDisk.innerHTML = floppyDisk;
		upgradeResult.innerHTML = "";
		cost1 = Math.floor(cost1 * 1.7);
		var convertedC = convertC(cost1);
		console.log(convertedC);
		cost1Tag.setAttribute("title", convertedC);
		desCost1.innerHTML = (convertedC);
	};
};

//upgradeTwo: Windows 98
var upgradeTwo = function() {
	if (bits < cost2) {
		upgradeResult.innerHTML = notEnough;
	} else {
		bits = bits - cost2;
		win98++;
		var converted = convert(bits);
		count.innerHTML = converted;
		amountWin98.innerHTML = win98;
		upgradeResult.innerHTML = "";
		cost2 = Math.floor(cost2 * 2.7);
		var convertedC = convertC(cost2);
		console.log(convertedC);
		cost2Tag.setAttribute("title", convertedC);
		desCost2.innerHTML = (convertedC);
	};
};

//UpgradeThree: Entry Level Programmer
var upgradeThree = function() {
	if (bits < cost3) {
		upgradeResult.innerHTML = notEnough;
	} else {
		bits = bits - cost3;
		ELP++;
		var converted = convert(bits);
		count.innerHTML = converted;
		amountELP.innerHTML = ELP;
		upgradeResult.innerHTML = "";
		cost3 = Math.floor(cost3 * 3.7);
		var convertedC = convertC(cost3);
		cost3Tag.setAttribute("title", convertedC);
	};
};

//UpgradeFour: Windows 7
var upgradeFour = function() {
	console.log("clicked");
	if (bits < cost4) {
		upgradeResult.innerHTML = notEnough;
	} else {
		bits = bits - cost4;
		win7++;
		var converted = convert(bits);
		count.innerHTML = converted;
		amountWin7.innerHTML = win7;
		upgradeResult.innerHTML = "";
		cost4 = Math.floor(cost4 * 4.7);
		var convertedC = convertC(cost4);
		cost4Tag.setAttribute("title", convertedC);
	};
};

//UpgradeFive: Flash Memory
var upgradeFive = function() {
	if (bits < cost5) {
		upgradeResult.innerHTML = notEnough;
	} else {
		bits = bits - cost5;
		flashMem++;
		var converted = convert(bits);
		count.innerHTML = converted;
		amountFlashMem.innerHTML = flashMem;
		upgradeResult.innerHTML = "";
		cost5 = Math.floor(cost5 * 5.7);
		var convertedC = convertC(cost5);
		cost5Tag.setAttribute("title", convertedC);
	};
};

//EpicUpgrade:  Mr. Bulloch
var epicUpgrade = function() {
	if (bits < costB) {
		upgradeResult.innerHTML = notEnough;
	} else {
		bits = bits - costB;
		bulloch++;
		var converted = convert(bits);
		count.innerHTML = converted;
		amountBulloch.innerHTML = bulloch;
		upgradeResult.innerHTML = "";
		costB = Math.floor(costB * 42);
		var convertedC = convertC(costB);
		costBTag.setAttribute("title", convertedC);
	};
};

//The last upgrade: the Internet
var internet = function() {
	if (bits < costI) {
		upgradeResult.innerHTML = notEnough;
	} else {
		bits = bits - costI;
		internet++;
		var converted = convert(bits);
		count.innerHTML = converted;
		amountInternet.innerHTML = internet;
		//console.log(internet);
		upgradeResult.innerHTML = "";
		costI = Math.floor(costI * 420);
		var convertedC = convertC(costI);
		costITag.setAttribute("title", convertedC);
	};
};

//Time intervals
//Tick: Game updating
setInterval(tick, 1000);
//Save interval: saves every 60 seconds
setInterval(autoSave, 60000);