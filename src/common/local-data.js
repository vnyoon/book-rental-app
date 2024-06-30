import img01 from "../assets/images/img01.jpg";
import img02 from "../assets/images/img02.jpg";
import img03 from "../assets/images/img03.jpg";
import img04 from "../assets/images/img04.jpg";
import img05 from "../assets/images/img05.jpg";
import img06 from "../assets/images/img06.jpg";
import img07 from "../assets/images/img07.jpg";

export const bookList = [
  {
    id: crypto.randomUUID(),
    cover: img01,
    title: "明亮的夜晚",
    description: "一个个鲜活的面孔逐渐从一张张黑白相片中，从一封封感人至深的书信中，从久远的回忆里，穿过女人生如飘萍、命如草芥的时代，走到我面前。",
    genre: "小说 / 剧情",
    rating: 5,
    price: 52,
    createAt: "2023-08",
    href: "https://book.douban.com/subject/36457094/"
  },
  {
    id: crypto.randomUUID(),
    cover: img02,
    title: "一百年，许多人，许多事",
    description: "人的一生不知要遇到多少人与事，到了我这个岁数，经历过军阀混战、抗日战争、解放战争，以及新中国成立之后发生的种种，我虽是个平凡的人，却也有许许多多的人可念，许许多多的事想说。",
    genre: "历史 / 自传 / 文化",
    rating: 4,
    price: 108,
    createAt: "2023-1",
    href: "https://book.douban.com/subject/36162256/"
  },
  {
    id: crypto.randomUUID(),
    cover: img03,
    title: "同意",
    description: "瓦内莎·斯普林格拉以冷静、精确而坦诚的文字，讲述了自己14岁时被年长她30多岁的法国作家G引诱、控制，并发展出一段畸形关系的经历。关系破裂后，这段经历仍被G作为文学素材一再书写，他在文坛也声名愈盛，而瓦内莎仿佛被囚禁在文字中，失去了诠释自己人生的能力，永远停留在十四岁。",
    genre: "回忆 / 勇气",
    rating: 4,
    price: 49,
    createAt: "2023-02-08",
    href: "https://book.douban.com/subject/35947066/"
  },
  {
    id: crypto.randomUUID(),
    cover: img04,
    title: "我在北京送快递",
    description: "进入社会工作至今的二十年间，胡安焉走南闯北，辗转于广东、广西、云南、上海、北京等地，做过快递员、夜班拣货工人、便利店店员、保安、自行车店销售、服装店导购、加油站加油工……他将日常的点滴和工作的甘苦化作真诚的自述，记录了一个平凡人在生活中的辛劳、私心、温情、正气。",
    genre: "文学 / 励志 / 纪实",
    rating: 3,
    price: 56,
    createAt: "2023-03",
    href: "https://book.douban.com/subject/36150423/"
  },
  {
    id: crypto.randomUUID(),
    cover: img05,
    title: "我还能看到多少次满月升起",
    description: "本书是继回顾幼年至五十七岁人生的《音乐即自由》后，记录坂本龙一暮年足迹并将 遗赠给未来的决定性自传。收录由好友铃木正文亲自撰写的后记，记录作者最后的时光。",
    genre: "艺术 / 自传",
    rating: 4,
    price: 69,
    createAt: "2023-06-21",
    href: "https://book.douban.com/subject/36361860/"
  },
  {
    id: crypto.randomUUID(),
    cover: img06,
    title: "为了活下去的思想",
    description: "对于那些想要平淡的日常，希望明天也能像今天一样活着的女人来说，英雄主义就是敌人。",
    genre: "社会 / 记实",
    rating: 4,
    price: 58,
    createAt: "2022-12",
    href: "https://book.douban.com/subject/36127030/",
    upcoming: true
  },
  {
    id: crypto.randomUUID(),
    cover: img07,
    title: "凯列班与女巫",
    description: "一部资本主义过渡时期的妇女身体史。以女性视角对话马克思主义的代表作，探讨资本原始积累背景下性别与再生产的重磅作品！",
    genre: "历史 / 文化",
    rating: 5,
    price: 80,
    createAt: "2023-5",
    href: "https://book.douban.com/subject/36374149/"
  }
]