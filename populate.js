var jsonData = {
      "Table": [
    {
        "name": "Adoroboros"
    },
    {
        "name": "Anahir"
    },
    {
        "name": "Azuroc"
    },
    {
        "name": "Babawa"
    },
    {
        "name": "Baboong"
    },
    {
        "name": "Banapi"
    },
    {
        "name": "Barnshe"
    },
    {
        "name": "Bigu"
    },
    {
        "name": "Blooze"
    },
    {
        "name": "Bunbun"
    },
    {
        "name": "Capyre"
    },
    {
        "name": "Cerneaf"
    },
    {
        "name": "Crystle"
    },
    {
        "name": "Deendre"
    },
    {
        "name": "Fomu"
    },
    {
        "name": "Ganki"
    },
    {
        "name": "Gazuma"
    },
    {
        "name": "Goolder"
    },
    {
        "name": "Granpah"
    },
    {
        "name": "Gyalis"
    },
    {
        "name": "Hidody"
    },
    {
        "name": "Houchic"
    },
    {
        "name": "Kaku"
    },
    {
        "name": "Kalabyss"
    },
    {
        "name": "Kalazu"
    },
    {
        "name": "Kinu"
    },
    {
        "name": "Lapinite"
    },
    {
        "name": "Loali"
    },
    {
        "name": "Magmis"
    },
    {
        "name": "Mastione"
    },
    {
        "name": "Mudrid"
    },
    {
        "name": "Mushi"
    },
    {
        "name": "Mushook"
    },
    {
        "name": "Myx"
    },
    {
        "name": "Nessla"
    },
    {
        "name": "Nidrasil"
    },
    {
        "name": "Noxolotl"
    },
    {
        "name": "Occlura"
    },
    {
        "name": "Oceara"
    },
    {
        "name": "Orphyll"
    },
    {
        "name": "Paharac"
    },
    {
        "name": "Paharo"
    },
    {
        "name": "Pewki"
    },
    {
        "name": "Pigepic"
    },
    {
        "name": "Piraniant"
    },
    {
        "name": "Platimous"
    },
    {
        "name": "Platox"
    },
    {
        "name": "Platypet"
    },
    {
        "name": "Raiber"
    },
    {
        "name": "Raican"
    },
    {
        "name": "Raize"
    },
    {
        "name": "Saipat"
    },
    {
        "name": "Saku"
    },
    {
        "name": "Sherald"
    },
    {
        "name": "Shuine"
    },
    {
        "name": "Skail"
    },
    {
        "name": "Skunch"
    },
    {
        "name": "Smazee"
    },
    {
        "name": "Spriole"
    },
    {
        "name": "Swali"
    },
    {
        "name": "Taifu"
    },
    {
        "name": "Tateru"
    },
    {
        "name": "Tental"
    },
    {
        "name": "Toxolotl"
    },
    {
        "name": "Tuvine"
    },
    {
        "name": "Tuwai"
    },
    {
        "name": "Ukama"
    },
    {
        "name": "Umishi"
    },
    {
        "name": "Valash"
    },
    {
        "name": "Volarend"
    },
    {
        "name": "Vulcrane"
    },
    {
        "name": "Vulor"
    },
    {
        "name": "Vulvir"
    },
    {
        "name": "Wiplump"
    },
    {
        "name": "Zenoreth"
    },
    {
        "name": "Zephyruff"
    }
]
  };
 
     $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Tem 1 -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].name + "'>" + jsonData.Table[i].name + "</option>";
         }
 
         $("#temdrop1").html(listItems);
     });
	 
     $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Tem 2 -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].name + "'>" + jsonData.Table[i].name + "</option>";
         }
 
         $("#temdrop2").html(listItems);
     });
	 
	      $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Tem 3 -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].name + "'>" + jsonData.Table[i].name + "</option>";
         }
 
         $("#temdrop3").html(listItems);
     });
	 
	      $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Tem 4 -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].name + "'>" + jsonData.Table[i].name + "</option>";
         }
 
         $("#temdrop4").html(listItems);
     });
	 
	      $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Tem 5 -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].name + "'>" + jsonData.Table[i].name + "</option>";
         }
 
         $("#temdrop5").html(listItems);
     });
	 
	      $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Tem 1 -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].name + "'>" + jsonData.Table[i].name + "</option>";
         }
 
         $("#temdrop6").html(listItems);
     });
	 
	      $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Tem 2 -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].name + "'>" + jsonData.Table[i].name + "</option>";
         }
 
         $("#temdrop7").html(listItems);
     });
	 
	      $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Tem 3 -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].name + "'>" + jsonData.Table[i].name + "</option>";
         }
 
         $("#temdrop8").html(listItems);
     });
	 
	      $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Tem 4 -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].name + "'>" + jsonData.Table[i].name + "</option>";
         }
 
         $("#temdrop9").html(listItems);
     });
	 
	      $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Tem 5 -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].name + "'>" + jsonData.Table[i].name + "</option>";
         }
 
         $("#temdrop10").html(listItems);
     });