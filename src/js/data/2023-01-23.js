dataSetVersion = "2023-01-23"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by unit",
    key: "unit",
    tooltip: "Check this to restrict to certain units.",
    checked: false,
    sub: [
    { name: "Happy Around!", key: "HA" },
	  { name: "Peaky P-key", key: "PP" },
	  { name: "Photon Maiden", key: "PM" },
	  { name: "Merm4id", key: "M4" },
	  { name: "RONDO", key: "RO" },
	  { name: "Lyrical Lily", key: "LL" },
    { name: "Call of Artemis", key: "CA" },
    { name: "Abyssmare", key: "AB" },
    { name: "UniChØrd", key: "UC" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Rinku Aimoto",
    img: "7yj3NNS.png",
    opts: {
      unit: [ "HA" ]
    }
  },
  {
    name: "Maho Akashi",
    img: "VzvdOuD.png",
    opts: {
      unit: [ "HA" ]
    }
  },
  {
    name: "Muni Ohnaruto",
    img: "ZGvTGXa.png",
    opts: {
      unit: [ "HA" ]
    }
  },
  {
    name: "Rei Togetsu",
    img: "I8nA3tM.png",
    opts: {
      unit: [ "HA" ]
    }
  },
  {
    name: "Kyoko Yamate",
    img: "4Ezd9Xy.png",
    opts: {
      unit: [ "PP" ]
    }
  },
  {
    name: "Shinobu Inuyose",
    img: "V0F45Bc.png",
    opts: {
      unit: [ "PP" ]
    }
  },
  {
    name: "Yuka Jennifer Sasago",
    img: "edHRWVw.png",
    opts: {
      unit: [ "PP" ]
    }
  },
  {
    name: "Esora Shimizu",
    img: "tfJzBRm.png",
    opts: {
      unit: [ "PP" ]
    }
  },
  {
    name: "Saki Izumo",
    img: "OTYT5LC.png",
    opts: {
      unit: [ "PM" ]
    }
  },
  {
    name: "Ibuki Niijima",
    img: "cXJGlod.png",
    opts: {
      unit: [ "PM" ]
    }
  },
  {
    name: "Towa Hanamaki",
    img: "stHnK22.png",
    opts: {
      unit: [ "PM" ]
    }
  },
  {
    name: "Noa Fukushima",
    img: "WnVXgLq.png",
    opts: {
      unit: [ "PM" ]
    }
  },
  {
    name: "Rika Seto",
    img: "DA4JwTv.png",
    opts: {
      unit: [ "M4" ]
    }
  },
  {
    name: "Marika Mizushima",
    img: "Rui6ss3.png",
    opts: {
      unit: [ "M4" ]
    }
  },
  {
    name: "Saori Hidaka",
    img: "v9K2tvV.png",
    opts: {
      unit: [ "M4" ]
    }
  },
  {
    name: "Dalia Matsuyama",
    img: "uv27QAH.png",
    opts: {
      unit: [ "M4" ]
    }
  },
  {
    name: "Tsubaki Aoyagi",
    img: "08MZG9p.png",
    opts: {
      unit: [ "RO" ]
    }
  },
  {
    name: "Nagisa Tsukimiyama",
    img: "ilKfb6c.png",
    opts: {
      unit: [ "RO" ]
    }
  },
  {
    name: "Hiiro Yano",
    img: "SBEOccx.png",
    opts: {
      unit: [ "RO" ]
    }
  },
  {
    name: "Aoi Miyake",
    img: "Tywdc6Y.png",
    opts: {
      unit: [ "RO" ]
    }
  },
  {
    name: "Miyu Sakurada",
    img: "7UOcWbL.png",
    opts: {
      unit: [ "LL" ]
    }
  },
  {
    name: "Haruna Kasuga",
    img: "ErL6y6S.png",
    opts: {
      unit: [ "LL" ]
    }
  },
  {
    name: "Kurumi Shiratori",
    img: "mLteop6.png",
    opts: {
      unit: [ "LL" ]
    }
  },
  {
    name: "Miiko Takeshita",
    img: "CJe4YgD.png",
    opts: {
      unit: [ "LL" ]
    }
	},
  {
    name: "Airi Amano",
    img: "IoGneQi.png",
    opts: {
      unit: [ "CA" ]
    }
	},
  {
    name: "Mana Kase",
    img: "6Pc2VpM.png",
    opts: {
      unit: [ "CA" ]
    }
	},
  {
    name: "Shano Himegami",
    img: "bJTG6Du.png",
    opts: {
      unit: [ "CA" ]
    }
	},
  {
    name: "Touka Takao",
    img: "V7QJNKC.png",
    opts: {
      unit: [ "CA" ]
    }
	},
  {
    name: "Michiru Kaibara",
    img: "HijirYo.png",
    opts: {
      unit: [ "UC" ]
    }
  },
  {
    name: "Lumina Ichihoshi",
    img: "Uc5rQia.png",
    opts: {
      unit: [ "UC" ]
    }
  },
  {
    name: "Kokoa Shinomiya",
    img: "m4z9XoT.png",
    opts: {
      unit: [ "UC" ]
    }
  },
  {
    name: "Hayate Tendo",
    img: "aLonhkD.png",
    opts: {
      unit: [ "UC" ]
    }
  },
  {
    name: "Neo",
    img: "8AYXA2G.png",
    opts: {
      unit: [ "AB" ]
    }
  },
  {
    name: "Sophia",
    img: "8j5a96Q.png",
    opts: {
      unit: [ "AB" ]
    }
  },
  {
    name: "Elsie",
    img: "Iawq4Qb.png",
    opts: {
      unit: [ "AB" ]
    }
  },
  {
    name: "Weronika",
    img: "GkVgkGk.png",
    opts: {
      unit: [ "AB" ]
    }
  }
];
