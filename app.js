import {checkShopNow, checkImage, checkLink, checkId, checkSoonEnding} from './functions.js'

const newsletter = document.querySelector("#")

const ITEMS = [
    {
        link0: "",


        text0: '',


        lp_id: "",
        lp_id_end: "",
        lp_id_end1: "",
    },

]

    for (const elem in ITEMS) {
        const link0 = ITEMS[elem].link0
        const lp_id = ITEMS[elem].lp_id
        const lp_id_end = ITEMS[elem].lp_id_end
        const lp_id_end1 = ITEMS[elem].lp_id_end1
        const data = '220708'

        newsletter.innerHTML += `
        <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;" cellspacing="0" cellpadding="0" border="0" align="center">
            <tr>
                <td>
                    <a href="https://www.example.${checkLink(link0)}/content/${lp_id}/?utm_source=newsletter&utm_medium=email&utm_campaign=${checkId(link0)}>
                        <img src="https://example.info/example/2022/${data}${checkImage(link0)}_01.jpg" alt="" style="display:block" width="100%" border="0" />
                    </a>
                </td>
            </tr>
            <tr>
                <td style="font-family: 'Open Sans', sans-serif; text-align:center; padding-top: 0px; padding-bottom: 0px; padding-right: 20px; padding-left: 20px;" width="610">
                    <p style="font-size: 18px; color:#40403f; text-align:center!important; line-height: 1.3; margin: 0!important;">
                        ${ITEMS[elem].text0}
                    </p>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <img src=https://example.info/example/2022/${data}${checkImage(link0)}_03.jpg alt="" style="display: block;" width="100%" border="0" />
                </td>
            </tr>
        </table>`
    }


