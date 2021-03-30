const getUsersData = () => {
  return [
    {
      userInfo: {
        accessTokenSecret: "5p3lqw2HrGfNy1JiSTcIGWql2sFjfUZhouPYn4c6tQ1Np",
        uid: "3D8fhDpcdZMAKe1ubeOwXs3go3Q2",
        screenName: "sobaotto",
        accessTokenKey: "1326489613041459200-bWks5DnB7fGxUZdA8DWrMMHhSfyqA5",
      },
      processings: [
        {
          id: "ItDwbJ288e4xXlxL7Mp1",
          startTime: "12:33",
          tweet: "お腹すいた",
          processingType: "post",
          switch: "ON",
          processingName: "テスト２",
        },
        {
          id: "ymp41yi4tnPCwJooOuZh",
          switch: "ON",
          processingType: "post",
          processingName: "テスト",
          startTime: "12:43",
          tweet: "今日は、結構天気良くて気持ちいなぁ",
        },
      ],
    },
    {
      userInfo: {
        uid: "qtTLTvzzOgSynf7C9ppbCad6RpZ2",
        accessTokenSecret: "A7K4OCAt8ZGs0vfFsa3DnJtEYOQaByG3erZOVpwQZmsls",
        screenName: "beymnk",
        accessTokenKey: "1019824555131527168-rBB5nIpOjjpsJdvWfEsn4z8voO6iNk",
      },
      processings: [
        {
          id: "i6IQNffFDZ2Se9pELrq9",
          processingType: "post",
          switch: "ON",
          startTime: "16:08",
          processingName: "テストテスト",
          tweet: "テスト",
        },
        {
          id: "xRhox4cN050AFzvdRsXz",
          switch: "ON",
          startTime: "18:06",
          processingType: "post",
          tweet: "テスト２",
          processingName: "テストテスト２",
        },
      ],
    },
  ];
};

module.exports = getUsersData;
