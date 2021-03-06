"use strict";
var $ = function(id)
{
	return document.getElementById(id);
}

var loadValue = 6
var loadMoreValue = 4;
function loadOriginalSix()
{
	var iframelist = ["riDX4mVv73Y",
 "2a7LZpLvARg",
 "2Dq8XdvUDjM",
 "QtX0qMQ6Uvk",
 "MxRtnIY7Ytw",
 "2F2BN2oEbO8",
 "_YnRqNrIY3s",
 "Hv9nWDEAIJc",
 "ZESvdbwj4Pk",
 "1OBxn1gbmiU",
 "0H-CoZyEqzE",
 "EyX-ScHvkVI",
 "vxbN6RvUtrE",
 "mkUC_jeTIXQ",
 "ExY-Spz5hdA",
 "lYkdRMc2PcI",
 "kMGTrYb9Hbc",
 "8hNIN0oC8ok",
 "ALh9vkarvDQ",
 "9agvuhZm53A",
 "HrGEMkPmcBg",
 "kBAJCfaSUCk",
 "th44s9OeWB8",
 "IHTp5_tC-gI",
 "sbcYUJ9NhWU",
 "rSM7o3TKogU",
 "t8yPkCpptQo",
 "lM26tGNirmw",
 "XIbWItVfmWA",
 "YuagCB5oyEc",
 "KGd2mUx9m-Q",
 "Co4GnBngk14",
 "UQhN-WBI7dk",
 "ZcRE-6AKP_4",
 "apzpNUXoLM8",
 "cSQzaJ6S0oU",
 "X0XmZUPFEWo",
 "xR_RXndnK4c",
 "Q-ARpC4XGSo",
 "ppiFpjKAsCI",
 "eQMkm1stUsE",
 "CvdvuagQrIU",
 "KrSx-HeHtbY",
 "0dyxnImDLEA",
 "LetuyH73VIo",
 "Wq6rHIFCdRo",
 "qHAaUuAameU",
 "oBF67Z9BNDg",
 "OR2WUSiK8R4",
 "kn6RvAyrM4M",
 "ONa1MPRRuiM",
 "6CCuw9azVT8",
 "fxUO4b_mf4s",
 "VGkSRFUfNMQ",
 "g3LIDUon9WU",
 "iVsIdOarUWE",
 "6Swg14Zaq9A",
 "QiJe3c_BaFc",
 "bzIJzlmA5ks",
 "fIBA8o4St1w",
 "1i3cDkSCCUw",
 "x8AzorRIh-I",
 "rU_k-arqkzs",
 "kgI4F9d9Rz4",
 "19U-epboGpU",
 "JU0m8zI4EsU",
 "vEQkwoYWZuE",
 "jNQOWeelasQ",
 "thB6UPQg00Q",
 "jZOvBm6lkTU",
 "w-GDuFW44eI",
 "o2wF3MxAfbc",
 "sn00uHIAhfQ",
 "vCGOZXXj69Y",
 "KTAkRr6CGTY",
 "5Vu8pzC4mIM",
 "5p0SAvsg2Vo",
 "zqK4lfs1KPI",
 "D8tCy5TbPrE",
 "Yev5XmTs20c",
 "MgKezxDFyWs",
 "ymHU_PpLTso",
 "U-iuVeu35y4",
 "Z2_XbkG6KBk",
 "WLb8f-A7BCU",
 "xPkAFqo0Qs8",
 "RAZvHwp5wDU",
 "O36-bKjT1dA",
 "4XRikjjmwy4",
 "291fENH1ezg",
 "vAddLGDdXys",
 "k9stJ1DmaA0",
 "J0xPgfzWjW0",
 "q6QstnT10VM",
 "xdZw1w08yFA",
 "mX22JB1z7Gs",
 "XZhC5Mv1E-I",
 "vHe1mq29T_A",
 "UBHPdeam50s",
 "BU2ZGEH-6Ls",
 "q4COQGya-7k",
 "VzJt3NQhvWM",
 "42SGhusMhB4",
 "JnjDdlBe86w",
 "wEwSohTKP3I",
 "c-Sl3qKHgPI",
 "jSb0H4k3tgA",
 "A0U65un1tmA",
 "jgamBZjFe08",
 "WO3nvNT7QXM",
 "WRsxrajnq58",
 "xlwRywyPPow",
 "jCgeDE-fGPU",
 "Ztlq54fnkaI",
 "UFbCF3-HAaA",
 "a50PY_A_IvY",
 "oMDI7eI1bpY",
 "MV7cQxhf66w",
 "MS4XW86S3pI",
 "P98YCITtWIE",
 "3DKue4q080Y",
 "ZBsP0WggLmg",
 "rO5NGtWGidM",
 "jjLxETaDKEk",
 "QydqwvnoL-E",
 "eAhrgSLdzlk",
 "dqd8h6WP57o",
 "Lf_9utwyxWY",
 "BiMrFHBAhKk",
 "FdmTq3i_Sr4",
 "0NiLQoU1Fjo",
 "gjorOdjVdqM",
 "FEKFA5WmhIU",
 "WYDANGkMHyk",
 "rQzdGS4USCY",
 "9TM8UenUmqQ",
 "jGATkLAO-SE",
 "smztVDrFJhw",
 "ZfGiLFvGu0s",
 "QM5fQhIonbg",
 "jV2U7FJ-flw",
 "OezwTrcnGCA",
 "s4a_B102TgI",
 "bLLlcO4Op3U",
 "3Nvc2-65mIQ",
 "oXj5G2z_fy8",
 "OOrQjNimXaE",
 "qKphNCbqkFg",
 "4CcmeIXDdCY",
 "4kdrLqZs4rc",
 "rop9DVE4BzU",
 "gXQdUKglYh4",
 "4S4LRWsIjjQ",
 "5kh3ve_GTsU",
 "eKW1nwGr49o",
 "zmLwsGQeluc",
 "Xr37G3R4XTM",
 "dhIJ9eUAmJA",
 "N4tcB77UJ1Y",
 "q0rN4a8Gqm4",
 "0kZ8uZyY0TM",
 "pTnBO0qOOJI",
 "-YQinodqgIg",
 "5q_HeTcpskI",
 "d2PtEfsDKZc",
 "wnQO7gBn9DM",
 "AK1_FE8MFUo",
 "_JC7m6IoQEw",
 "kkVAv5B_6-c",
 "ZIKfE691lrE",
 "vLhCFGKdddE",
 "8SOc0q8P4Ko",
 "yQtUcXXnEnQ",
 "YVZrn5ZlLtA",
 "yf3iEosrid0",
 "2ES9slkFrbg",
 "lm5hcuGytP0",
 "ingvHRRoWcA",
 "oh7ETs9otCI",
 "BBM1ZBQcal4",
 "gXtfGnPPXsI",
 "0Vrwl8sfws0",
 "GzwXqdRVEcI",
 "Aw3YOFmdhY4",
 "TAJdc6PDhpQ",
 "Nwyb_DTKxtc",
 "LL5yT82sfq4",
 "tv2nPcEmDnk",
 "dRr1BXzKPIo",
 "GvOU1d1YRLM",
 "kLUhEOvaR-Y",
 "aDM_v-bP9Us",
 "2BguIYar4Go",
 "1yyhcEoS560",
 "0M6dFc7PT0E",
 "PzgVrU3boBI",
 "GxpoFRCD0YA",
 "QdNiKsFgwmc",
 "LaIK8m_JjOY",
 "5C1ZWBGOn-o",
 "9VfoxKKsWO4",
 "DCmvz43-plQ",
 "7z_eqlitTtc",
 "y0ywuh5HNKI",
 "9KtE03XspBY",
 "RmFt7if_vgY",
 "Ayn2-p-PsU0",
 "V2ltpMyqxQs",
 "VxxDRczgeD8",
 "-fonWUQzns0",
 "_9ZQn6dmZd0",
 "_GIBXnWyuoQ",
 "fqjEGp4hJOs",
 "dy8nT0hbhm0",
 "acrhUq0cIAo",
 "EJ4w1ZQIxww",
 "pVVK_WdSs1E",
 "Vm8LoXW2HDQ",
 "chnQHQ5mPNI",
 "rck6JYmgf7Q",
 "PZVA5XpQWNs",
 "C6DYHxfbgCE",
 "15yBTkaOAqQ",
 "m_Mal3mdhGI",
 "kzWdQ9xPw54",
 "sfZ5gPBy1wU",
 "4Ze4_sL_hXQ",
 "Roq0axQeS4E",
 "kFxwwIh0-S0",
 "o1u9eeLjkTo",
 "6QmASIMdnLQ",
 "WewmEKlTKx8",
 "2YFOltm9e8g",
 "aY8Z_c2z5UA",
 "_qsBa9KweH8",
 "S520Al_9c80",
 "kYqJoZDWuYw",
 "KjP9uY8bQcw",
 "AvTuy_teb3I",
 "FYlRA2LomRI",
 "ibkQEaOewKs",
 "cxlvGDCGKF0",
 "VWI4kbkk-IQ",
 "nc0k3wIvK0Q",
 "5kSrQJOIWLk",
 "v71GDfN1yiA",
 "qU1ElJ5IftE",
 "PHhYaTnYmww",
 "LMDieNXL1ZY",
 "-hMvMNRlc2s",
 "y_90bKI2D9Y",
 "5AyrhdEjKnI",
 "J4rfuwStkxU",
 "_m8xBgV6lc0",
 "_TyWKsuce_g",
 "PMRqqOkcZ2Q",
 "OXDHZGXNZWM",
 "5xsk-AQ9QRM",
 "3u3MV9dvg7k",
 "prarHhlTbBM",
 "41MKtuvfrMY",
 "qsYLPO1P-NQ",
 "kWOd_4cZmOU",
 "hhL4_4O5fkM",
 "qXutrQw3C2c",
 "43gJ6JfiG74",
 "gGXWLaSOZL4",
 "y9k1mKLcYzk",
 "Pk_L2vBm_eA",
 "xL8Bi_FFkRI",
 "xRd6Hh64tjI",
 "fvqRc8atFFg",
 "ENLPb6srSCU",
 "OUzDUd1o0Y4",
 "zmyUvKPFu-U",
 "NH1_uSz0Jf4",
 "3HaL6F3-5NY",
 "kJLeMkGi-Fg",
 "cJr6zD6lH8w"];

 var totalString = "";
 for(var i = 0; i < loadValue; i++)
 {

			 var mediaString = 
			 "<div class = \"row\">\n"
				+ "<div class = \"container-fluid center\">\n"
					+ "<div class = \"center col-sm-12 col-md-12 col-lg-6 col-xl-6\">\n"
						+  "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/\\"+iframelist[i]+"\\\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" + "\n"
					+ "</div>\n"
					+ "<div class = \"center col-sm-12 col-md-12 col-lg-6 col-xl-6\">\n"
						+  "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/\\"+iframelist[i+=1]+"\\\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" + "\n"
					+ "</div>\n"
				+ "</div>\n"
			+ "</div>";
			 
			 totalString += mediaString + "\n";
			 
 }
 $("videos").innerHTML = totalString;
 
}




var initialLoad = loadValue;

function loadMore()
{
	var iframelist = ["2a7LZpLvARg",
 "2Dq8XdvUDjM",
 "QtX0qMQ6Uvk",
 "MxRtnIY7Ytw",
 "2F2BN2oEbO8",
 "_YnRqNrIY3s",
 "Hv9nWDEAIJc",
 "ZESvdbwj4Pk",
 "1OBxn1gbmiU",
 "0H-CoZyEqzE",
 "EyX-ScHvkVI",
 "vxbN6RvUtrE",
 "mkUC_jeTIXQ",
 "ExY-Spz5hdA",
 "lYkdRMc2PcI",
 "kMGTrYb9Hbc",
 "8hNIN0oC8ok",
 "ALh9vkarvDQ",
 "9agvuhZm53A",
 "HrGEMkPmcBg",
 "kBAJCfaSUCk",
 "th44s9OeWB8",
 "IHTp5_tC-gI",
 "sbcYUJ9NhWU",
 "rSM7o3TKogU",
 "t8yPkCpptQo",
 "lM26tGNirmw",
 "XIbWItVfmWA",
 "YuagCB5oyEc",
 "KGd2mUx9m-Q",
 "Co4GnBngk14",
 "UQhN-WBI7dk",
 "ZcRE-6AKP_4",
 "apzpNUXoLM8",
 "cSQzaJ6S0oU",
 "X0XmZUPFEWo",
 "xR_RXndnK4c",
 "Q-ARpC4XGSo",
 "ppiFpjKAsCI",
 "eQMkm1stUsE",
 "CvdvuagQrIU",
 "KrSx-HeHtbY",
 "0dyxnImDLEA",
 "LetuyH73VIo",
 "Wq6rHIFCdRo",
 "qHAaUuAameU",
 "oBF67Z9BNDg",
 "OR2WUSiK8R4",
 "kn6RvAyrM4M",
 "ONa1MPRRuiM",
 "6CCuw9azVT8",
 "fxUO4b_mf4s",
 "VGkSRFUfNMQ",
 "g3LIDUon9WU",
 "iVsIdOarUWE",
 "6Swg14Zaq9A",
 "QiJe3c_BaFc",
 "bzIJzlmA5ks",
 "fIBA8o4St1w",
 "1i3cDkSCCUw",
 "x8AzorRIh-I",
 "rU_k-arqkzs",
 "kgI4F9d9Rz4",
 "19U-epboGpU",
 "JU0m8zI4EsU",
 "vEQkwoYWZuE",
 "jNQOWeelasQ",
 "thB6UPQg00Q",
 "jZOvBm6lkTU",
 "w-GDuFW44eI",
 "o2wF3MxAfbc",
 "sn00uHIAhfQ",
 "vCGOZXXj69Y",
 "KTAkRr6CGTY",
 "5Vu8pzC4mIM",
 "5p0SAvsg2Vo",
 "zqK4lfs1KPI",
 "D8tCy5TbPrE",
 "Yev5XmTs20c",
 "MgKezxDFyWs",
 "ymHU_PpLTso",
 "U-iuVeu35y4",
 "Z2_XbkG6KBk",
 "WLb8f-A7BCU",
 "xPkAFqo0Qs8",
 "RAZvHwp5wDU",
 "O36-bKjT1dA",
 "4XRikjjmwy4",
 "291fENH1ezg",
 "vAddLGDdXys",
 "k9stJ1DmaA0",
 "J0xPgfzWjW0",
 "q6QstnT10VM",
 "xdZw1w08yFA",
 "mX22JB1z7Gs",
 "XZhC5Mv1E-I",
 "vHe1mq29T_A",
 "UBHPdeam50s",
 "BU2ZGEH-6Ls",
 "q4COQGya-7k",
 "VzJt3NQhvWM",
 "42SGhusMhB4",
 "JnjDdlBe86w",
 "wEwSohTKP3I",
 "c-Sl3qKHgPI",
 "jSb0H4k3tgA",
 "A0U65un1tmA",
 "jgamBZjFe08",
 "WO3nvNT7QXM",
 "WRsxrajnq58",
 "xlwRywyPPow",
 "jCgeDE-fGPU",
 "Ztlq54fnkaI",
 "UFbCF3-HAaA",
 "a50PY_A_IvY",
 "oMDI7eI1bpY",
 "MV7cQxhf66w",
 "MS4XW86S3pI",
 "P98YCITtWIE",
 "3DKue4q080Y",
 "ZBsP0WggLmg",
 "rO5NGtWGidM",
 "jjLxETaDKEk",
 "QydqwvnoL-E",
 "eAhrgSLdzlk",
 "dqd8h6WP57o",
 "Lf_9utwyxWY",
 "BiMrFHBAhKk",
 "FdmTq3i_Sr4",
 "0NiLQoU1Fjo",
 "gjorOdjVdqM",
 "FEKFA5WmhIU",
 "WYDANGkMHyk",
 "rQzdGS4USCY",
 "9TM8UenUmqQ",
 "jGATkLAO-SE",
 "smztVDrFJhw",
 "ZfGiLFvGu0s",
 "QM5fQhIonbg",
 "jV2U7FJ-flw",
 "OezwTrcnGCA",
 "s4a_B102TgI",
 "bLLlcO4Op3U",
 "3Nvc2-65mIQ",
 "oXj5G2z_fy8",
 "OOrQjNimXaE",
 "qKphNCbqkFg",
 "4CcmeIXDdCY",
 "4kdrLqZs4rc",
 "rop9DVE4BzU",
 "gXQdUKglYh4",
 "4S4LRWsIjjQ",
 "5kh3ve_GTsU",
 "eKW1nwGr49o",
 "zmLwsGQeluc",
 "Xr37G3R4XTM",
 "dhIJ9eUAmJA",
 "N4tcB77UJ1Y",
 "q0rN4a8Gqm4",
 "0kZ8uZyY0TM",
 "pTnBO0qOOJI",
 "-YQinodqgIg",
 "5q_HeTcpskI",
 "d2PtEfsDKZc",
 "wnQO7gBn9DM",
 "AK1_FE8MFUo",
 "_JC7m6IoQEw",
 "kkVAv5B_6-c",
 "ZIKfE691lrE",
 "vLhCFGKdddE",
 "8SOc0q8P4Ko",
 "yQtUcXXnEnQ",
 "YVZrn5ZlLtA",
 "yf3iEosrid0",
 "2ES9slkFrbg",
 "lm5hcuGytP0",
 "ingvHRRoWcA",
 "oh7ETs9otCI",
 "BBM1ZBQcal4",
 "gXtfGnPPXsI",
 "0Vrwl8sfws0",
 "GzwXqdRVEcI",
 "Aw3YOFmdhY4",
 "TAJdc6PDhpQ",
 "Nwyb_DTKxtc",
 "LL5yT82sfq4",
 "tv2nPcEmDnk",
 "dRr1BXzKPIo",
 "GvOU1d1YRLM",
 "kLUhEOvaR-Y",
 "aDM_v-bP9Us",
 "2BguIYar4Go",
 "1yyhcEoS560",
 "0M6dFc7PT0E",
 "PzgVrU3boBI",
 "GxpoFRCD0YA",
 "QdNiKsFgwmc",
 "LaIK8m_JjOY",
 "5C1ZWBGOn-o",
 "9VfoxKKsWO4",
 "DCmvz43-plQ",
 "7z_eqlitTtc",
 "y0ywuh5HNKI",
 "9KtE03XspBY",
 "RmFt7if_vgY",
 "Ayn2-p-PsU0",
 "V2ltpMyqxQs",
 "VxxDRczgeD8",
 "-fonWUQzns0",
 "_9ZQn6dmZd0",
 "_GIBXnWyuoQ",
 "fqjEGp4hJOs",
 "dy8nT0hbhm0",
 "acrhUq0cIAo",
 "EJ4w1ZQIxww",
 "pVVK_WdSs1E",
 "Vm8LoXW2HDQ",
 "chnQHQ5mPNI",
 "rck6JYmgf7Q",
 "PZVA5XpQWNs",
 "C6DYHxfbgCE",
 "15yBTkaOAqQ",
 "m_Mal3mdhGI",
 "kzWdQ9xPw54",
 "sfZ5gPBy1wU",
 "4Ze4_sL_hXQ",
 "Roq0axQeS4E",
 "kFxwwIh0-S0",
 "o1u9eeLjkTo",
 "6QmASIMdnLQ",
 "WewmEKlTKx8",
 "2YFOltm9e8g",
 "aY8Z_c2z5UA",
 "_qsBa9KweH8",
 "S520Al_9c80",
 "kYqJoZDWuYw",
 "KjP9uY8bQcw",
 "AvTuy_teb3I",
 "FYlRA2LomRI",
 "ibkQEaOewKs",
 "cxlvGDCGKF0",
 "VWI4kbkk-IQ",
 "nc0k3wIvK0Q",
 "5kSrQJOIWLk",
 "v71GDfN1yiA",
 "qU1ElJ5IftE",
 "PHhYaTnYmww",
 "LMDieNXL1ZY",
 "-hMvMNRlc2s",
 "y_90bKI2D9Y",
 "5AyrhdEjKnI",
 "J4rfuwStkxU",
 "_m8xBgV6lc0",
 "_TyWKsuce_g",
 "PMRqqOkcZ2Q",
 "OXDHZGXNZWM",
 "5xsk-AQ9QRM",
 "3u3MV9dvg7k",
 "prarHhlTbBM",
 "41MKtuvfrMY",
 "qsYLPO1P-NQ",
 "kWOd_4cZmOU",
 "hhL4_4O5fkM",
 "qXutrQw3C2c",
 "43gJ6JfiG74",
 "gGXWLaSOZL4",
 "y9k1mKLcYzk",
 "Pk_L2vBm_eA",
 "xL8Bi_FFkRI",
 "xRd6Hh64tjI",
 "fvqRc8atFFg",
 "ENLPb6srSCU",
 "OUzDUd1o0Y4",
 "zmyUvKPFu-U",
 "NH1_uSz0Jf4",
 "3HaL6F3-5NY",
 "kJLeMkGi-Fg",
 "cJr6zD6lH8w"];

 var totalString = "";
 
 for(var i = initialLoad; i < (initialLoad + loadMoreValue - 1); i++)
 {

			 var mediaString = 
			 "<div class = \"row\">\n"
				+ "<div class = \"container-fluid center\">\n"
					+ "<div class = \"center col-sm-12 col-md-12 col-lg-6 col-xl-6\">\n"
						+  "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/\\"+iframelist[i]+"\\\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" + "\n"
					+ "</div>\n"
					+ "<div class = \"center col-sm-12 col-md-12 col-lg-6 col-xl-6\">\n"
						+  "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/\\"+iframelist[i+=1]+"\\\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" + "\n"
					+ "</div>\n"
				+ "</div>\n"
			+ "</div>";
			 
			 totalString += mediaString + "\n";
			 
 }
 $("videos").insertAdjacentHTML('beforeend', totalString);
 initialLoad += 2;
 
}




window.onload = function()
{
	loadOriginalSix();
	
	
}