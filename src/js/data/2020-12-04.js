dataSetVersion = "2020-12-04"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
    name: "Ibuki Nijima",
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
  }
];
