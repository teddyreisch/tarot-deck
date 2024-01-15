function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  var randomTarotCard = [
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/ace-of-cups-r/", alt: "ace of cups reversed", link: "https://i.imgur.com/IS8yw0L.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/two-of-cups-r/", alt: "two of cups reversed", link: "https://i.imgur.com/6ed5EYR.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/three-of-cups-r/", alt: "three of cups reversed", link: "https://i.imgur.com/HzfghUx.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/four-of-cups-r/", alt: "four of cups reversed", link: "https://i.imgur.com/iv6Eg2z.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/five-of-cups-r/", alt: "five of cups reversed", link: "https://i.imgur.com/1cXoO9m.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/six-of-cups-r/", alt: "six of cups reversed", link: "https://i.imgur.com/jor0O1q.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/seven-of-cups-r/", alt: "seven of cups reversed", link: "https://i.imgur.com/XNZORY1.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/eight-of-cups-r/", alt: "eight of cups reversed", link: "https://i.imgur.com/y2gXHpi.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/nine-of-cups-r/", alt: "nine of cups reversed", link: "https://i.imgur.com/4pLs4eB.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/ten-of-cups-r/", alt: "ten of cups reversed", link: "https://i.imgur.com/x5ttgow.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/page-of-cups-r/", alt: "page of cups reversed", link: "https://i.imgur.com/2y2o5jT.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/knight-of-cups-r/", alt: "knight of cups reversed", link: "https://i.imgur.com/s2RWyC1.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/queen-of-cups-r/", alt: "queen of cups reversed", link: "https://i.imgur.com/fkVDgln.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/reversed/king-of-cups-r/", alt: "king of cups reversed", link: "https://i.imgur.com/8XxcIqs.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/ace-of-cups/", alt: "ace of cups", link: "https://i.imgur.com/oiifbPi.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/two-of-cups/", alt: "two of cups", link: "https://i.imgur.com/p1RK3JN.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/three-of-cups/", alt: "three of cups", link: "https://i.imgur.com/glMHTBw.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/four-of-cups/", alt: "four of cups", link: "https://i.imgur.com/4dsOFNX.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/five-of-cups/", alt: "five of cups", link: "https://i.imgur.com/BWmW1qm.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/six-of-cups/", alt: "six of cups", link: "https://i.imgur.com/vxtjSFy.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/seven-of-cups/", alt: "seven of cups", link: "https://i.imgur.com/3muzh17.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/eight-of-cups/", alt: "eight of cups", link: "https://i.imgur.com/iKh4D5p.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/nine-of-cups/", alt: "nine of cups", link: "https://i.imgur.com/uZJqCDM.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/ten-of-cups/", alt: "ten of cups", link: "https://i.imgur.com/eAGdFqo.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/page-of-cups/", alt: "page of cups", link: "https://i.imgur.com/4CE8AuJ.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/knight-of-cups/", alt: "knight of cups", link: "https://i.imgur.com/OFgFJ4n.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/queen-of-cups/", alt: "queen of cups", link: "https://i.imgur.com/mbKRf6h.jpg" },
    { url: "https://crystal-reflections.com/tarot3/cups-2/upright/king-of-cups/", alt: "king of cups", link: "https://i.imgur.com/6dmCtt7.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/ace-of-pentacles/", alt: "ace of pentacles reversed", link: "https://i.imgur.com/kFpPU5V.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/two-of-pentacles-r/", alt: "two of pentacles reversed", link: "https://i.imgur.com/NXfZESC.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/three-of-pentacles-r/", alt: "three of pentacles reversed", link: "https://i.imgur.com/6KZXwi7.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/four-of-pentacles-r/", alt: "four of pentacles reversed", link: "https://i.imgur.com/HHhaKIZ.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/five-of-pentacles-r/", alt: "five of pentacles reversed", link: "https://i.imgur.com/4fBNf4t.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/six-of-pentacles-r/", alt: "six of pentacles reversed", link: "https://i.imgur.com/AU0zC1s.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/seven-of-pentacles-r/", alt: "seven of pentacles reversed", link: "https://i.imgur.com/TXdXTBp.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/eight-of-pentacles-r/", alt: "eight of pentacles reversed", link: "https://i.imgur.com/WTipmnK.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/nine-of-pentacles-r/", alt: "nine of pentacles reversed", link: "https://i.imgur.com/7j9UPSc.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/ten-of-pentacles-r/", alt: "ten of pentacles reversed", link: "https://i.imgur.com/p8yryff.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/page-of-pentacles-r/", alt: "page of pentacles reversed", link: "https://i.imgur.com/NxNlEOX.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/knight-of-pentacles-r/", alt: "knight of pentacles reversed", link: "https://i.imgur.com/HTR3zLM.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/queen-of-pentacles-r/", alt: "queen of pentacles reversed", link: "https://i.imgur.com/iFQEvsD.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/reversed/king-of-pentacles-r/", alt: "king of pentacles reversed", link: "https://i.imgur.com/XpYjl1f.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/ace-of-pentacles/", alt: "ace of pentacles", link: "https://i.imgur.com/0iD5lAi.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/two-of-pentacles/", alt: "two of pentacles", link: "https://i.imgur.com/iQbwyov.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/three-of-pentacles/", alt: "three of pentacles", link: "https://i.imgur.com/JgET75k.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/four-of-pentacles/", alt: "four of pentacles", link: "https://i.imgur.com/488wPDu.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/five-of-pentacles/", alt: "five of pentacles", link: "https://i.imgur.com/P6dgpcG.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/six-of-pentacles/", alt: "six of pentacles", link: "https://i.imgur.com/KkEMUZh.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/seven-of-pentacles/", alt: "seven of pentacles", link: "https://i.imgur.com/pbfv5Bd.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/eight-of-pentacles/", alt: "eight of pentacles", link: "https://i.imgur.com/hmezOlW.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/nine-of-pentacles/", alt: "nine of pentacles", link: "https://i.imgur.com/KyWhK07.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/ten-of-pentacles/", alt: "ten of pentacles", link: "https://i.imgur.com/DxxpcJF.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/page-of-pentacles/", alt: "page of pentacles", link: "https://i.imgur.com/GqVywjS.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/knight-of-pentacles/", alt: "knight of pentacles", link: "https://i.imgur.com/wnNEDKw.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/queen-of-pentacles/", alt: "queen of pentacles", link: "https://i.imgur.com/gBtMF7B.jpg" },
    { url: "https://crystal-reflections.com/tarot3/pentacles/upright/king-of-pentacles/", alt: "king of pentacles", link: "https://i.imgur.com/VhOhpQl.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/ace-of-swords-r/", alt: "ace of swords reversed", link: "https://i.imgur.com/sbYNuXq.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/two-of-swords-r/", alt: "two of swords reversed", link: "https://i.imgur.com/t9Y6PPX.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/three-of-swords-r/", alt: "three of swords reversed", link: "https://i.imgur.com/C7mCJ6z.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/four-of-swords-r/", alt: "four of swords reversed", link: "https://i.imgur.com/02s7bDK.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/five-of-swords-r/", alt: "five of swords reversed", link: "https://i.imgur.com/ld4ZoKb.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/six-of-swords-r/", alt: "six of swords reversed", link: "https://i.imgur.com/8aIq1yn.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/seven-of-swords-r/", alt: "seven of swords reversed", link: "https://i.imgur.com/Er4VOFS.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/eight-of-swords-r/", alt: "eight of swords reversed", link: "https://i.imgur.com/hf48EF9.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/nine-of-swords-r/", alt: "nine of swords reversed", link: "https://i.imgur.com/63fxJNG.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/ten-of-swords-r/", alt: "ten of swords reversed", link: "https://i.imgur.com/ckjxjnC.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/page-of-swords-r/", alt: "page of swords reversed", link: "https://i.imgur.com/JO7qQdq.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/knight-of-swords-r/", alt: "knight of swords reversed", link: "https://i.imgur.com/bPPlCG9.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/queen-of-swords-r/", alt: "queen of swords reversed", link: "https://i.imgur.com/mcnkyVw.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/reversed/king-of-swords-r/", alt: "king of swords reversed", link: "https://i.imgur.com/fXAhlpV.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/ace-of-swords/", alt: "ace of swords", link: "https://i.imgur.com/MaTZSr7.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/two-of-swords/", alt: "two of swords", link: "https://i.imgur.com/InVARSh.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/three-of-swords/", alt: "three of swords", link: "https://i.imgur.com/QnyJaeK.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/four-of-swords/", alt: "four of swords", link: "https://i.imgur.com/Hk5Stqb.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/five-of-swords/", alt: "five of swords", link: "https://i.imgur.com/Mq6LI8T.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/six-of-swords/", alt: "six of swords", link: "https://i.imgur.com/PTxTS2k.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/seven-of-swords/", alt: "seven of swords", link: "https://i.imgur.com/hTSfUUA.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/eight-of-swords/", alt: "eight of swords", link: "https://i.imgur.com/Zc6wmxo.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/nine-of-swords/", alt: "nine of swords", link: "https://i.imgur.com/9cz7Adr.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/ten-of-swords/", alt: "ten of swords", link: "https://i.imgur.com/RXbrlYW.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/page-of-swords/", alt: "page of swords", link: "https://i.imgur.com/vVj5Eo6.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/knight-of-swords/", alt: "knight of swords", link: "https://i.imgur.com/c3DzMgz.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/queen-of-swords/", alt: "queen of swords", link: "https://i.imgur.com/cex20PF.jpg" },
    { url: "https://crystal-reflections.com/tarot3/swords/upright/king-of-swords/", alt: "king of swords", link: "https://i.imgur.com/9mCMXBh.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/ace-of-wands-r/", alt: "ace of wands reversed", link: "https://i.imgur.com/ErLWQgA.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/two-of-wands-r/", alt: "two of wands reversed", link: "https://i.imgur.com/MUdHaRc.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/three-of-wands-r/", alt: "three of wands reversed", link: "https://i.imgur.com/7DNDGnN.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/four-of-wands-r/", alt: "four of wands reversed", link: "https://i.imgur.com/ISepL9r.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/five-of-wands-r/", alt: "five of wands reversed", link: "https://i.imgur.com/a1yY91m.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/six-of-wands-r/", alt: "six of wands reversed", link: "https://i.imgur.com/6J42SMr.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/seven-of-wands-r/", alt: "seven of wands reversed", link: "https://i.imgur.com/nh7sCbT.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/eight-of-wands-r/", alt: "eight of wands reversed", link: "https://i.imgur.com/1iYidnD.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/nine-of-wands-r/", alt: "nine of wands reversed", link: "https://i.imgur.com/SK6S0LY.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/ten-of-wands-r/", alt: "ten of wands reversed", link: "https://i.imgur.com/0z7a4De.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/page-of-wands-r/", alt: "page of wands reversed", link: "https://i.imgur.com/vVsXVb9.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/knight-of-wands-r/", alt: "knight of wands reversed", link: "https://i.imgur.com/q5XYx5Q.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/queen-of-wands-r/", alt: "queen of wands reversed", link: "https://i.imgur.com/Z0tx6cw.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/reversed/king-of-wands-r/", alt: "king of wands reversed", link: "https://i.imgur.com/iSHf8mQ.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/ace-of-wands/", alt: "ace of wands", link: "https://i.imgur.com/ThVlYOr.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/two-of-wands/", alt: "two of wands", link: "https://i.imgur.com/zdEhuyl.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/three-of-wands/", alt: "three of wands", link: "https://i.imgur.com/XYElz6G.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/four-of-wands/", alt: "four of wands", link: "https://i.imgur.com/Y4E2Vcy.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/five-of-wands/", alt: "five of wands", link: "https://i.imgur.com/ilRqm9j.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/six-of-wands/", alt: "six of wands", link: "https://i.imgur.com/RBKvCZW.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/seven-of-wands/", alt: "seven of wands", link: "https://i.imgur.com/53u3oYk.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/eight-of-wands/", alt: "eight of wands", link: "https://i.imgur.com/C4CfMTF.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/nine-of-wands/", alt: "nine of wands", link: "https://i.imgur.com/Rk1e1m1.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/ten-of-wands/", alt: "ten of wands", link: "https://i.imgur.com/XCVB5pk.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/page-of-wands/", alt: "page of wands", link: "https://i.imgur.com/1rllzyZ.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/knight-of-wands/", alt: "knight of wands", link: "https://i.imgur.com/7K7GGbc.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/queen-of-wands/", alt: "queen of wands", link: "https://i.imgur.com/wchHmgj.jpg" },
    { url: "https://crystal-reflections.com/tarot3/wands/upright/king-of-wands/", alt: "king of wands", link: "https://i.imgur.com/7z6WbEC.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-chariot-r/", alt: "the chariot reversed", link: "https://i.imgur.com/77nQiz6.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/death-r/", alt: "death reversed", link: "https://i.imgur.com/IRP36Qv.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-devil-r/", alt: "the devil reversed", link: "https://i.imgur.com/1ZgJGki.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-emperor-r/", alt: "the emperor reversed", link: "https://i.imgur.com/Sjg6XY4.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-empress-r/", alt: "the empress reversed", link: "https://i.imgur.com/ORTWFVQ.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-fool-r/", alt: "the fool reversed", link: "https://i.imgur.com/Ys3RpQt.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-hanged-man-r/", alt: "the hanged man reversed", link: "https://i.imgur.com/GGkYvu1.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-hermit-r/", alt: "the hermit reversed", link: "https://i.imgur.com/08AZP1u.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-hierophant-r/", alt: "the hierophant reversed", link: "https://i.imgur.com/LCjUiLo.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/high-priestess-r/", alt: "high priestess reversed", link: "https://i.imgur.com/WqvdeMB.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/judgement-r/", alt: "judgement reversed", link: "https://i.imgur.com/Alv2fM7.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/justice-r/", alt: "justice reversed", link: "https://i.imgur.com/lLzgjwx.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-lovers-r/", alt: "the lovers reversed", link: "https://i.imgur.com/LFFPkFz.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-magician-r/", alt: "the magician reversed", link: "https://i.imgur.com/CeCAgBL.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-moon-r/", alt: "the moon reversed", link: "https://i.imgur.com/uooMT8i.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-star-r/", alt: "the star reversed", link: "https://i.imgur.com/bKbWMdd.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/strength-r/", alt: "strength reversed", link: "https://i.imgur.com/uSNV0ja.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-sun-r/", alt: "the sun reversed", link: "https://i.imgur.com/fpdD2Rh.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/temperance-r/", alt: "temperance reversed", link: "https://i.imgur.com/RKIlVu4.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/tower-r/", alt: "tower reversed", link: "https://i.imgur.com/dlwW4q0.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/wheel-of-fortune-r/", alt: "wheel of fortune reversed", link: "https://i.imgur.com/d73cnCB.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/reversed/the-world-r/", alt: "the world reversed", link: "https://i.imgur.com/OhoiMoO.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-chariot/", alt: "the chariot", link: "https://i.imgur.com/miDy1ko.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/death/", alt: "death", link: "https://i.imgur.com/pDyyJ6C.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-devil/", alt: "the devil", link: "https://i.imgur.com/jFCDnqK.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-emperor/", alt: "the emperor", link: "https://i.imgur.com/bf1FJWe.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-empress/", alt: "the empress", link: "https://i.imgur.com/wmDraIk.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-fool/", alt: "the fool", link: "https://i.imgur.com/vKHcVbd.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-hanged-man/", alt: "the hanged man", link: "https://i.imgur.com/dgyAQ92.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-hermit/", alt: "the hermit", link: "https://i.imgur.com/JS0uEMC.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-hierophant/", alt: "the hierophant", link: "https://i.imgur.com/Q8pkR8x.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/high-priestess/", alt: "high priestess", link: "https://i.imgur.com/OFs8IwI.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/judgement/", alt: "judgement", link: "https://i.imgur.com/cAYVb3R.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/justice/", alt: "justice", link: "https://i.imgur.com/qrjhD5u.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-lovers/", alt: "the lovers", link: "https://i.imgur.com/ZmHPHV6.jpg" },
    { url: "https://i.imgur.com/CeCAgBL.jpg", alt: "the magician", link: "https://i.imgur.com/1GLkih2.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-moon/", alt: "the moon", link: "https://i.imgur.com/c33XBOT.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-star/", alt: "the star", link: "https://i.imgur.com/I9cOmcc.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/strength/", alt: "strength", link: "https://i.imgur.com/o0Kbmwk.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-sun/", alt: "the sun", link: "https://i.imgur.com/QB121C8.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/temperance/", alt: "temperance", link: "https://i.imgur.com/AYWKXJP.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/tower/", alt: "tower", link: "https://i.imgur.com/OM2Z0nS.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/wheel-of-fortune/", alt: "wheel of fortune", link: "https://i.imgur.com/VUGa6r2.jpg" },
    { url: "https://crystal-reflections.com/tarot3/major-arcana/upright/the-world/", alt: "the world", link: "https://i.imgur.com/s4k9UJr.jpg" }
  ];

  function getRandomTarotCard() {
    var random = getRandomInt(randomTarotCard.length);
    return randomTarotCard[random];
  }

  // Function to handle button click
  function showRandomCard() {
    // Remove the previous image if it exists
    var previousImage = document.getElementById('randomCardImage');
    if (previousImage) {
      previousImage.remove();
    }

    // Get a random tarot card object
    var randomCard = getRandomTarotCard();

    // Create an image element
    var imageElement = document.createElement('img');
    imageElement.id = 'randomCardImage';
    imageElement.src = randomCard.link;
    imageElement.alt = randomCard.alt;

    // Append the image to the container
    document.getElementById('randomCardContainer').appendChild(imageElement);

    // Add a link to the image
    var imageLink = document.createElement('a');
    imageLink.href = randomCard.url;
    imageLink.target= "_blank";
    imageLink.appendChild(imageElement);
    
    // Replace the container content with the link
    document.getElementById('randomCardContainer').innerHTML = '';
    document.getElementById('randomCardContainer').appendChild(imageLink);
  }

