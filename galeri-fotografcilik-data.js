/* ================================================================
   galeri-fotografcilik-data.js  —  Fotoğrafçılık Galerisi Veri Dosyası

   YAPMANIZ GEREKEN TEK ŞEY:
   Aşağıdaki "resimler" dizisindeki örnek satırları silip
   kendi Blogger resim linklerinizi yazmanızdır.

   Her link şu formatta olmalıdır:
   "https://blogger.googleusercontent.com/img/b/.../fotograf-001.jpg",

   ÖNEMLİ KURALLAR:
   • Her link çift tırnak içinde olmalı
   • Linkler arasında virgül olmalı
   • SON linkin sonunda virgül OLMAMALI
   • Yaklaşık 50 resme kadar ekleyebilirsiniz
================================================================ */

/* GK_GALERILER dizisine fotoğrafçılık galerisini ekle */
window.GK_GALERILER = window.GK_GALERILER || [];

window.GK_GALERILER.push({

  /* Galeri kimliği — değiştirmeyin */
  id: "fotografcilik",

  /* Header'daki buton etiketi */
  butonEtiket: "📷 FOTOĞRAF ARŞİVİ",

  /* Modal başlık ve alt başlık */
  baslik   : "PROFESYONEL & MOBİL FOTOĞRAFÇILIK",
  altBaslik: "ARŞİV_B  //  FOTOĞRAF  //",

  /* ──────────────────────────────────────────────────────
     RESİMLER BURADA OLACAK
  ────────────────────────────────────────────────────── */
  resimler: [

    // ── Resim linkleri burada ──
    // Her satırın sonuna virgül eklemeyi unutma!:

    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq8gjJIH0ZXQoZ3AW1ijaVmZPEhCCZgcjvRBzRwm8IlhT83YAJW4c7OW2c42JqlCiiWfMjmX0hJnt_wn7RHL8j7FXJF-Yfe_k_jGhe2fYP3KMNFGTZE9kG4GkbrLlSTlhMlwHd_od_uBVI/s1600/2014-05-12+15.17.27.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZpQOo2MELLMR9F4AKRL1iPnSijq_DZHkzqjN0lwBFpvIV9qEKI-IaGz8swHciiGkcRvnoEOAjgN1Dd1XP1Y03o_VWJQSKrg-piJ2h9sBeQIyZB-oa38K0ognz3Z0iBYPNqcVPXzDCe1cF/s1600/IMG-20140615-WA0027.jpg",
	"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYP3NxQiS-iY0k102h-Jgp7noUpaghgbhsJyg00yXIOWoj2OKEnwzJEZdRdkhRAO3FRh86XRnfwn4xbOCT-xidozhd_Da7epw-iwqUGIbgWts8eSxTg4AZdQtwXYJzB8lqAocqP29OJwwq/s1600/20141130_085023.jpg",
	"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkG4Y7M_zoyn_PhQdwgtX2g5TE91PiVuXUjVcwL_8AcI-MMC42rSnVn4ZueojCrOnt08cFl0uWVQv1Jdwfi2_IQUFu2S5tTUXFhZVbirACeZ2woTGwpSsrNLDiNjB2BeT4QLaca34-KsRg/s1600/20141127_143027.jpg",
	"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ3BNFwBEoesquSAiHMzcTo_41zJGkp4E5vUkUqlCdEHO7teDIWco1ZwsJ_AAcWsPikJsFf5gOvdD2kHF20xrDtjYLeR60bwKi3C6Tzf1Zxtru0KtkTHHzkOe4VY1yPOCOH-MVBpsu0ZQ/s1600/13112011477.jpg",
	"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA84ky0FK_TNVYGH0cp3W8V1eW4FopwfXY_sAX6jZdm1Dpw8m5EPJ4yJ8wh8-ObaVXxaTS8x4AFKMWViFc1zZ_ol2cUJ5aFGYojEWnRg4HhmAXrOj72klBZ8BRYGwZzttBPQay5N9q5mQ/s1600/13112011460.jpg",
    "https://blogger.googleusercontent.com/img/a/AVvXsEgNQ17vDUQwDYv4gyaBT04wYVf5qzCBheh7OUvbiA5W3zQ-1hagLg-F2ffS9SDRpMQYPz7yeylFljF66pDLol9Fs7hwk_BLA2zDTVNm5CrubIfRpp6Yfh57aK7FldmJhUKS6Dro6rV8m1MwgmFqbdxd2QGtqg183IRkUZ1Wjhj_jIL3q4ng6tFKL02oxGE",
	"https://blogger.googleusercontent.com/img/a/AVvXsEh1COhmFeqFp4n4u5f6iSjqGvbL2EcUTzG8IGgwR8epw0dCbIRXWirE-aFIVay4x2_q-T1GjnOuIIui-V0eDPq-EkaMItIFnq9ABUCQ3AgfriCJ5vS_ABRnTKpdgj5f5p7QHgD22khr41TBbQMKc1bCn3Oile7JDrz5mTwhdCHgPHe2bCKWrgHH_RdSUqI",
	"https://blogger.googleusercontent.com/img/a/AVvXsEgTuD2Mm5G1UVoOeI_LdAT01TYpQ8E1fnRoIV6it6t9Kg9xaRLqK3_XN7nbVzgCEONKtVbHMzsli9eIP4xqOOC07JHxhy3UJRBCwYAEU6xOkszwFNIRdG-viwQY0J0GKnLB61X_7MjSevjQUMqI2oH6ixpQs8ufRtDMGO2DWz9UmnvXECMyv9t63gpmk6A",
	"https://blogger.googleusercontent.com/img/a/AVvXsEjIDDWnkvBSNWlS3icTpuDw_8wUA8obwt_6KenWJ15sS8AoKDToZc800oBfzzatj2pkd5b-nom7K6sjDieSCZQey3nDGq5rLNqqMZsaZJED2R0xxajhw5RqBAghpjSd4yoUeNUr_x9stk35EJXFI3UAMdtsEUehxu9Zu12c8RGGlanHsQF-bHFvcEezlOk",
	"https://blogger.googleusercontent.com/img/a/AVvXsEjS28eklZu9Yts-MgwkTz0DNtB2pmdWyud7rrHb_9bYrczoxyUIaduLSyNje8fcV9ZqAV22LX5dAWQE1HtzNOzjOaqcccDGGCA4OeZBa93AimHWDOreycPCXxrKfwTtHrjwRsd7XGfmAFz-GCdykULETP3TvcFYa8sr49epipJdfBWYS2ycHnOwZ4uQuac",
	"https://blogger.googleusercontent.com/img/a/AVvXsEiM9xI58dNrKMAm4SLeTBNvc7fZfMQgTbdwjCFTYYVgnJPbHeOwwecSb9HKqu9wuRFMxWD5r1NQPVUhXW3aYPIMcZEx2QHn-xz_SELbA5VjCtadKf1Cud3a_DViW1ityQ8VpFk0jk8pFPu-cjjEeB0LNwRlsuKGr1lvHDi204hMQsluLu3FsYVdz3-fCoI",
	"https://blogger.googleusercontent.com/img/a/AVvXsEgtTyJu-1ZM6A95-XxgzRG6G-rgHNPighxp5VLY4bbjYlMjHxRXZ0J7kIpavRSMp4RRRqrZA5MekqXVjqrth_SehPeBj_kWFe_uwi0vCr6Fv8lwDdHWw7uWvpKaHlv-bk9f45YldMSJL-gQ2sj3UMzKsvNaDaiCPMH887-niDONqv4PlT5Wo7SPvrkoAQA",
	"https://blogger.googleusercontent.com/img/a/AVvXsEhlSMIxQz7tYVaEnyUhT9LPRrVxS9f3ZqA9xU-0OAgZ-ktMa9oUKGXK5u5M_Qv02cx4PujEMTWrj0WAxEVUerKtcH9syELlCV3t-HHdKMEQn7njjJySlU22dxCxLVxVllFAXlwNEYnGT4qZu6Vebe03QfhgJrw2bV2e6jg0j7ejL6bEurdDxmL2cogNPTs",
	"https://blogger.googleusercontent.com/img/a/AVvXsEj4fSCfqVWV0Wb5gLagnTApKxl3cVblts-Uz4yaEvQLiaueNA6DuIIUvFZ7EjIxWjJIKHlr6nxj7gnxYmmrnqclB9LQQlv8DNw7jA4mybZwwK0CzcR43xprjGhIXPnmR9OG_s53nkExmF_MKrS0CN9I6M-PBY1p7NEndqfEaJrS96yggJmx63vYdLZyesY",
	"https://blogger.googleusercontent.com/img/a/AVvXsEgq6xbSxtPEQzywnSObfLYUSXSrR9-ZSbWTPxks118y4O8Cv-DzQdraefoNEHoY1Swcd1e2mDM6kflTCNVdYJybDCcZAOBYcMNtN2fcsog7Wauv_jBqNjlru1TLKbgW3HgkcFVZ2KY25yCwcryaKE_zSyiqR-aAmsZElJz22VR4uimZj9mU__ebMlDivuA",
	"https://blogger.googleusercontent.com/img/a/AVvXsEjbl3Jioq5I_g9zZUUSj41XMesJLeXSLnt_PheKpB5lmbctdD7faPhN_HYQxhCoZPC_kUrfHEUlHmfd_ePDTHF7-o5Q5QZb0D4AuIjawcWmZBsT4o_cXtKzou9fTDXSTKUKFXtT5xG8rddMpWMWrzS8v1DGRQZhvEcQw2ltlZIV2ioe4O2VNH_xAEXE4IE",
	"https://blogger.googleusercontent.com/img/a/AVvXsEhS6oAKvwP9ie5k52uJ4DoDEJBHnYFQZuhzVMZvZIljl9YSYQNXjWnp8N4iahISB2w-I8SxAgg2MA6FoGcoR3zr2fI65HMNCBPz7vZ5agMbZZi54Tj7pZMRo4lPJoxyeNq1j3Hn-FBcP4LnGBAGa6XqRb_Ba1coWQygj_pMMlf_R3slK7U7ESFfdJKkRDU",
    "https://blogger.googleusercontent.com/img/a/AVvXsEiBD9c7QbcT5RHrqsfha6irUUT4cOrS_bNKSPLJM_xsUpheSmCKdE9kaSTEtVBpFai2yQ50jTHvHaG2Cd_4PUbXzpR3g5VgOeVKBzXYkhXEhHZ6_9QCvzcIo4nCumALuyoUaWKzug-7vjj03FqSFRu3Vn3GVcEOoIiuLtUeTwptp9gyvW5OCwolOtBbKJE",
	"https://blogger.googleusercontent.com/img/a/AVvXsEiWxZvACEgpC_LKZ10ctNQpoxnTPa_881361etiwcYdLxZxa3uNUbnBUiUCsYTacHZq5zGuedIGihZ6LtJpahqoHC7XETuJJfPU6QU92yX8MoX6BVIa5md-HQLKKPcvSY3u-lMS08nR2A99WSagCfgbuLrHUqZZOC1Ne5MYHLB_bH956DzudYx7qeoGUjY",
	"https://blogger.googleusercontent.com/img/a/AVvXsEg0erkr594ywTB42xq79XlQTW-dq_eFCqHE2TOFI0sk9mxQ7ITsPU_MF76bWWQrk38UwvC7LKJZWa0eNWOUsYz_qC9zerN6EOK5AU4iMik86Lf-w12hE84aurlCUs20UU9rt5Vbr1grbhAzM0BobjpK1Vi0IqBlRVFW0pK-Ey0bQXZFJu1nAS0VeI49jHU",
	// Devam eden linkler...
    // "https://blogger.googleusercontent.com/.../fotograf-007.jpg",
    // "https://blogger.googleusercontent.com/.../fotograf-008.jpg",

  ]

}); // ← Bu satırı silme!
