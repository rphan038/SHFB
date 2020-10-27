import React, {Component} from 'react';
import './navbarStyles.css';
import logo from '../logo.png'
import Popup from './popup.js'

class Navbar extends React.Component {
    state = {
        displayPopup: false
    }

    showPopup = () => {
        this.setState({ displayPopup: !this.state.displayPopup });
    }

    render() {
        var pop = {};
        if( this.state.displayPopup) {
            return (
                <div>
                    <span>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAACCCAMAAABxTU9IAAABI1BMVEX///9DYCj3lB33jwD8///3kxj3jQAvUgDd5NcwUQBAXiPk5t7///3T2s5BXiXv8+3e4dfo6udYcEQvUwj73b42VxM9XBn8+PC7xLJLaDHO0sgqTwD5pUf4oDpJZzX7zqX87dv71Lb+9Oj78+H4/Pb3lyZ5i2f848n6xpKGmHgjSwC2wa5heEtadEMTQwApUQChrpj2hgD5tW77u3+Zp4z5y533qFH0okD86NL3rF75wYr5tXL0mCH617H6zaKDk3NrgFj3vXv9yqP53Lf6rF76rWb6qk37wI/5qV36w4X5vHX5+Or96tz57tf94cvByreps6NtgF2xv6SPnIMwWRqneh2adiHlxp4HRgBwhldIZyfR28l7k26MmoGYq4tje0oAPACO91X6AAAgAElEQVR4nO19iXvayLKvsDYjGoSNJTaDCZFlsxlsY2K8odwkc25mksGJ73tvJk4y9///K15Xb2pt2PHJycyZQ33fZEC0eqlfdVV1dXVbUdb0VyUNdQ6unz17dtBBmqKgP7s7/4nUOZvrx4aKyThWZ4fnaxB+MGndw5aq6huCdNW4evv8z+7WfxSdv1ENCQFGqnFyvuotrLKUarWKP2g/qJ9/Y3o/S0GAzgdj3kl/p/r++mLeUg1M6tXuy+vuD+3x3400dKpmQEDV0gXSUOyN88PXG5j5ui4KGeqbA209IZ5GSDu4UgkfKaXAoLYOFIm73es32HInS6rG7Fxb2/InENKuyTTQVXX/xWy229LV5LTQjTNevnszM7JUF67kbD0Vvp2QcmZQYb/pEiFG1Xd7l3pCzo05zIXq3kxApOvgyibKvVzPhW8m7eyYYHAoP9O084v9mLgbL7o7c4MioOuG2pqfnp391+HlTDciM8e4XKPwjaTtGAkMKFVftaJqSagp/GF23fWY3tGqB5cRBWasNdI3UpeoE3039cedfSNN7bf2wBmVxb16tqFKKBz8kK7/fWhGRFh9liq8mpdwXXVjdpDihmreRVhS31/ro2+hg2Mqu5nrrJ0ICrqxmynl7/dFSfVwrZAeTxqdCBtqtuh290NFY7R2VlRWfRGiUP3+ff3bUsdgan5FmW6LoaCqZ2ilhP8SgrD3nTv6d6Yzxl9jleRWiZ7RjcsHxXuHTxr9hbJWSI8lpo02jjsrCmldiAvNzx9mqzbnc0F99936+BQC7Yq6/yY6cZ/z7NdVpbTu3k73MZE57T13adXr79XFJxE6+3n36vjVn9qHRxKqCsFNrtWeRGIqqKfhM0VDGMEfqp6Qjp06Y5UX8dehrohDv/5OPHrFpoI+IxVitXB+MZ+92J1d3nR/IA4IzFgCBIQOgIQ7Hvv6g0hToozohuur76Q/eY36Pm3woGUYNECuGq1nP2wNlwFC9dgwjGMRD+6Qrz9UcXrdX/dOWzLuCG1wFL7X1NVaeggCD5JznTf7YVMhHQSlakTc5+fw1Xj2ozoF1IEkitjSuCX00fw7tfJaAkE54MqJBKiMV39FENQfDAI0GU2eOAmXV98pq+KUgTCDL7t0s2j/RasFG3HoT1ZHf1EQ9kSU9KEdMcw/5D2iFQaC+pK3qLcgeQl1r1uXkYLg8ma5vVriW7ygRv9JCyUCPREEskOe1ict1b3TYn1NGRENMYRPIyAwmayGcSF9hZhu9vplRSn0h7UHcWDLPwPM3TOo3TjgPYi82z2bt1qzf8TTabo3J63W7slZJ+zNwelPrdb8rCsHz7F5uziZzX66PPxVfowUb+di/vr0pvMEEKoHZ6cz3Pj8LNKp6vnNxcnrNxdnB9DODhD7XeuQbx5tWak+u3zR2n25E3Fx8Hh2W63XFzwThcrlNbz3qsPKaK+FPlqxFVNsuhUMwpZr9WtZZTgbmKlXodE9AkJK2pJWfQn7orA/OutI+3DVE/pYV7nPAu4VLWmc8l0kpYpdLl7QeCGnFrzah+dY9V2lOhsrQdgN63z9nDd1/XqDPlbVY4gfzyG/Z5/9SL7s0qLanm7Ql/fDZrUz1WBVsj0WGqwjWUKhl7Yj7dpkeqkNM+cQEHLOAyCwfboNfRc4Q2aCPo9H/ZBWvRJbp7oE0vsrsWHN4yiHYf/U1nMm9F1pAwlXIILr2gUvTar5RhDehP66LngRdnTD+AV/vyZyRTtHBI7WhjAg4Yi4OGsvw96z6FxHGo8AIfSPNtSLLNY2Ko8FgVdHczPOWQbBTkzTeS2W3UH3q/mAn+ts/1rH/9FxXBv8CakIcRB06bF+xSvgEsCG9I0gnKkkc4E2dRIdD3RpH7r0C4Cg3pDfiO9HpryinRC5YG/zhs/p7j3JhmjRR+kgSFNBfZ6ikGDcURBQMRMC7ZqzgfJll3JJ3T+N6CQisOr+4eEuGdLPtCHmSxmt1/Or4znjNunX/nyXyJn6VpNAuNqdtQyKOH2MaLRX3f1p43gFCHprl5Mug7BzfPXm4h9vd6nkVCUQ9Kvdln5McQGbR1w/pFyo3AukeOj6y8M5+XBFX35Jhne6t3d2op5oIQg6VUdhqEiaMqzCCATK1EvMhLqdBcI5j4wzDfHe4JkBxosd4SJ0ad/gKwml0wFTTaa3OlCu2yGPLlUqMZrynHCDsYaAgHWCppwTHtFFoEZVxRzKnK8AQSS5sfklDDO1ndorVXoXmgXB15RfSJfo3NTBS9D4b/hX2M7SdxHYMDUcPwTS6CajplQlENT3qIpJclSQtB+WXDYX80kQrEUGBl1mlQ2GMdJ2VLHDYOx2WDHgPNuG1kAYWZeJj6DLi0kP2KSfkJoIvsZNBASwAlDXBhJj1veps7K/CoQIJdYJxFnhOqulb0R3qLoCIsnb7BBh6ZCOvtWFZp/z7ofUCVVYpM2u2BvWk3GFkZUEod1PVUjaOcVAx6ziRkDrnoikJN3YoRI7D7upHOLuq/9FGLQh5IYTsSnccANc+mvGCA4C1aYUOaKN1AviK61aJ2TNBCyu3vPzTqdK+sTkKAEC6b3+BrdCZIlmqdCPtOsgLSrVphcEm90dyTNJW6wpJBNVOBt6/MelWUoBwQ3i5YBYnEi9Ogh9Rvyhe9HijgMzYgT0/RYlnYe9qTRFbAdxcdn2N5X5lhYDQZKsLg2N0HZXgcCbbu1HbIK2M8dGFMsMzKJMEGicWPWoVBjUkybKXxqR/oJ0+v0xFb6rwy6HIQMEjMKZmgVCYKXNhFJ+M1FL9ZI6MsbLuKereecnDJ+foS+IOxxcGCkIv5J5Hpmoh4TvDNG9UIllgEAgO3gQBPVMQ4S0iHf0y1zO/MwEASGVVt0F0dJ/IQ/nenRErNPaxTHzTNRDtBoEXDH3U+MgbFZKqSC4vRif0TVR/rrxppNSP2bQjPxMFLYnZ4CTlQyJZxyENprT2b8GhHQXlfYQ3BZ95UwgYo81PZEQ5vNEQMBkiE7rTAsYdG6sAIFUSKqJOfRTJx2EnBs1Hgc0U0+/xB5LWvQDsaUBaR0Rc9uaCUexRRzmd8QARLamSWRLZeGXx6kjtq367SBQJ7O1t7Nz/d/6ShDAUulXRHCP2a4wiYPu/yRG9IJbY616xpZ7Bt1qXAHCDQchFhrKlTJAMBtysR3aDrbr2UFA6jMTbs2oAZWIcnZDLIMYHVDDTCulhnkFCITx2GSKz98Ewj/orIO3VxpmTD9BO29JefbkkBrm2IgIacrBnEpoNexvJ41DN+kzoVDJZc2EqVyObSwnElq1bpX3hm4+ExHQ/kEm/nM+Z1gRIlpC+VCekXdAWSGaQsBCvekg0G6o70ll3wzCJbR+Kli6AgS6ItXlmqgqvRYjYotHEYAKzR3tQeoO2l46CDUnCwQrkMudZIFwqb/9lQhAlSo8qtKJ56nvswVdl216am/JSN5UyRg68BoNBuDZoSldos6M56tAYKu9d4DrN4NwqosBPAQC4haUR5iQxzChiqT6ij3vUF9P+0UEnBB5ly7rlJgHw0GIZS9O3SwQcq6suLJAqEL4UMWu2xVds+kv6fMZDS/sz38+mV0ZvNEunbXq7uXp630SsqRu64baunyti0mRCQJCLCT108+XpIVvAoFGfGfXBwcHJ6ttgjChUkYJO2ejz37+ed6i8VZMp8f7J2fX13s/Sav9OY2DnPz8Or6ZeZ0Ogm9lghBxUjkIL6K1spCqOAan85ViRwTg4CfmliK+w0Q9JjrwQzmApzOHMGsm4CnGPEI9Ekd7FAhV5mE/7B2JKK5sX1/wfFLoK39hRoPYZLTqjCorzhNcMMauDBCG2SBUZMucBQL2+kLPO4w5I+1cl08zcF5pF2HcmEb1kCIFg9WrjiJFUVNA0KIp5EnVu8pF3ZMPJukrQaC90i8l81vdlSIiLBxQ3ZArfM86Pw9jdVFus+BnDAStXsoGYZkCQitSqaKdv9HZPgndvgl/6vLdGwge74nB7FwZfF+FqTbtWmfbIupcLDu7kLJAdxw6x3iRGy7xOjND1GukzIRjyHUQHthz+HrMV8zXG/K7DATcIdVIgNCFTSWjIz9CFyrfE1KN14ThXVVUaLwIQwGXYqMnmiqaDoKXWwGCvLFwmg4CxCx2Luat/aur3cuz99FfOmf4h/3W/OK6Ky8tDi5m+1et3dO9MEPr+qR1dTW7OA+3Mat7e1jTUouPP13fVKV6D9+0YIP07d55cpMKQem9d2E9ka9o5+Lkv3dnr0/e3px3WWPX0NK7hOe9s4d/iN2+Ur2+fHF11Zqd3nSYX1TdefsaRj+7OJA3Yd8dzlutny5vOtE6BQiRqIFnPXImZIBAKSMDEnxplLarTv07GRi6+/6onABRfFXWgvgN8SxB8YPGW+Ml0ttI346naQKRRQJNENDi5RJZeEB8ZycauiHqKC2AF7MJ2inT8PvKmp5O6SCEhtkRIAzwY4xNzpS9ozUI34MyQFhYuZxzC7HUnFMgIFhDT6m5OTwT5N21t8w/u/qxvf6bEU9XjEWWJg5mt/PJBSwwCDbmvuXWK/ihtS2rxbdsJqxB+GdIgNCJPC47WPHk4D8SLPoImFgWfLUiseyLNQjfgc7TQVA+EY4TcoaBE36LOEdrEL4LdTJAIPqIkWVJn92Ik8ZA0BMbc2v6BuIgRBeB1AqkkTOJFBN7Qk/uAELK41K2/8ZXBWSBoHyspGFg1aMc4yCsOg29mjTbth/BX/S4Yv+e1M1QR8Q7TVDJjKW8ZIKwmU7lCCMLg8UIKzsrN/JvN7NZLBcrxJebCNnF5WAwmd71enfT21oxMz+NFrc3izVRetAoZDZbSOsxtEefJ5rhQ6QdLLNv8ts2f7gZkycBQiKD2t5OaCTLjCeknmWAUDzKp1K/wMeiKLXArLiWVcJkuY65faulqpxakK+4uAxePVqWY45ukVzMHlpmvuJgcoGciukMvzRQlvJatJ08Ke66uE0HF8/56Un/tsl6PIj9sEmH5m7G2ujT8kdb5Bsb/5G0svW2ORO2Yy1mg6B4QaUUwcC1EqlfN1kg5FMtSsnhICjLXCU61SzHiY8X0328WClazHajfYSK3Io7zZgP24npXbIq+WkKZNwzKdVjP5QrrJVY8g8rbxIQEFPmUnjBGzKhtupx1Hl6YOpFRQM3hKHkmL3kyPaeCAJamAnm4S4HsRZQz0xRihWpmG2l1IPbcaMOBKckCEDOqBCfOp5wCaM+OQbBZLxsRzv7EAg+K2BZBSVG/MBOGgh4Ut+2HTpIy0kVLg6CEXv+AAje0Enlhit3ECn2yEkrJY8jHQTcUmWU1t90ELBYxxkzcHi90U31EIScNYwA9wAIX9iThFlVQhCybldAC1K51U7AR+hpIHhJc8NRyEmsExM4ybTcFiuTBUJGlzNAwAyNltNGYcEY1wQIOSeSHr0ahAl/Kz6xgMRMSAcBMS/JKaebuodAsNwIOSZhjC8EvOSa2ABWXDFkVzJaYTFskPN50wyLWSPmKgsQHNPERtmRMHFTEvk5CJUmLgv/8BrzUd4sJQfd8iM/hSDkzFvp+UoQBlwozTQ1ye+4yACBNZqZEv8gCL0oLYAvH7mit5z2tFGwC43JSHDDEbGpWz7aEitWnIbqybmjhTgI1qSBqTbx26EhT8leZiC4ZfLNKw+GXFNHyw7lGWNGppQEQs6UoFsFwpK/Y0aytjhxELLP9KJPpeiWpkwPgeCmvCMcGqsy4dMLDQTv+JCFjONimiiWF6JbjpRyuNR7xUDY/ErC3WIghE6a0qMqrxSZNpu0+8w4u3dyFTIIlhO+tQKEey47lXRh5nkB2RfkINzxfIoiI/QUEO648FVkZbtZYux12exn3MHzQC5WznFoPpDvAgRJWmtcbVm5eNtJELw4ikALUqw09GnxvPybDALWniKCkA1CmU9zJ6rYBD0ChNEKEK6/HQSbq9uYiSry5w5ZxVbzGcWEhSOMTAOBu/IpUyEJAtc8FekRm6vOYEk5W5EVeQQEyThngrDFvV3394wlJGKHdbKvrkN1K6L7IsTzBIxYEG4FCLesf+6X2A9TNgyH6M1b9i2eiw/JgVKxVBCUAWsj7vSkgpCsgC3UHBvl6B5KWxpdFIScCCJkgWC3WYfdYdZ5fAHCWUYBbBPS/SpCYiY8HgQek6rEfRebSYxVl4pZbqJYTi6WDoLCPcx87O1MdVSSlrGIPgKv6CubClJyQ7hOYONgdaWDUBDuuDvKvBOBnxLJvgAM4UoyDzF/Owg8Ru4m9SO3AsA5m0+EzwnfmBWzmsDgDBAGnCWN6LuZhlmecA3KZpC8ArPQQfgrB6HOgOb7vakgVMoBH287I5KiSCBknidH2KzwcI13P/FH1qdRwGeGACGWbiVc1ER1XKc7ycnV4D1vhBWkzEHGI/pTBgg285DcmEvIXdQCOTVlbw6Y01sKpwxik9AiAsQm5DisnoFgtbmXx5zqVBBK7UdgoKDdh0CwTZp4gT/d5SqOZVkly63zNLWHQPBlCopsuzrJNVI//+lWEuVkMY/V7XxUMkHg+ii20OIgWO16G5PlML+lJIeHC5TL1ObUKnEwOQh1ITTYYqIMELjOigeaYsRA0E+zCggQpmYYT/mD/fjMWA0CbAOEBPadmd9SLqkhIeWMj5jbZSelR3UrZEwWCAvG3SD6mK+YSyUSQ2edzLmyumU9pLqeIS51NwRBmbCAqgUcTgeBT4jVuxz8tubLrAIAgjtR7EDedeaOGb+T1vgl+lJ67IiAwBZH7ZSmuDHG8/uOKf5kMcSdSpL3kQUCfz/mHqXHjlzZk0VsiAH92mMerIBJAkH5zAzK78pqECrZ91EQev0QCDA7sdDV5e4LQ73z0ExIgMAGZY1SmuIgLFYVQ3KxTBA41qOoWc8I4DlBWRRhawM+RDYSd8gdBBkEr03rMwcPzIR68uSxTOzUmXqSVYDEjnofIgFNk0/OV/8SED6vBuHDdwcBu1ofY51w2BARsy4OZ6MMAveeQHetAiFn5VfOBXbXT/Z1hHQlG+l86M9lZFE+Qh3FN6yAhiF37x5XLBOE3mp15FQIOWFclq9H7XxsiKzDwjRHQODLQqy8VoKQs5yYsxwhfswjec8Lo/tE2oW0gHoQBFOmo5pYjZZyySU8aoeGebLCMLPwkftVyQaBRX3iOzLcOxoUG41iYzm42+YR3RLzpplZDgNWfKlgsShiBATEzYLzkQ845h1xlK3KfRaH6QHSjeSBp5CWid0tU0zdB0Gw7EJIWwUv9D3TXFTWc1iV8GL5lGJmWCwThLo0WyRKLtaKYouBTAWNanmsxEW3mc/G133RmaB4vKVUEJx74c9YK6wzS26PHiOWKQGCKQ1MgBA7qZ69Yi7KS60oCb8bFmtjNoqnLdYKHKjYHkpK7EiEQXpyx3MVMX85E9mSIwYC7w53dxOxI19MisQeqiB+wuAqC4RaFARLxuAJINhu+jIK04IZf4hH8FnxQLEsEHiULy59KSBwBUS3jP0Myw1joUo4DoIIPGaAoHwJN6eyVgs8pTfzXs6B3EbJsSLRYX5XTzyB7+EAnpUM4PENBDmAl1RbohhxnNJBEPtG+diSMA0ENgFLEAXwUh0K1hM68gQIaCQDl7KfsBAaKSuO+uBfFKEmEha8biU/GniRgNpBRhblChC4yXXju0y9SIw6uxg3KkTTpIPAJ0tiW3YFCFZdi0lcjDDbYegJEJRiczUIIQpZuzp7D4FAZ/Zwexjc1RJK7Qkg2MJxiqp7ruoZh7j5zcWy/uLF0kCYiE2duF+YBgKD2xqh9NzPkL9kRZcEQewVZoGAxCqrkp4OtZOVEcwJlk2pQQagJ4AgJD6Xl1l0zwNT3ApwaY7a5obYoM7c3kR3whTG93TSQPCYYwzeLF97WRXJsa7w7W+6VEgBwauvBoFsjLEHqS7SzqoUPMIMiyRjp/94/gQQtoTcmHfcLtjTMX/YLPBijN2lvFRMbGuZGRv9W4NcWH9ixByELfGkMJS0IJ8U7WKE2BKdbvykgBDuuWalvNjceSpZacZZyHLWn1GAHqQtrQgJEGKprKtACLVFzrEWg/ticbCwwlyWXkoxd1ErFu9rcrFYyot7u8Q0uAvcMOXFSeaX8P2EpQ38tIsDv8InHPCLhYLiji330scAagoISPFFVCcj+UvYDffDKjZm7fQPCQgZztWTQFAC0eWSBQEEKWVLPpe4qhjfKwyTvwi5kk53gmTLImxhNjGZlTAb0/od9zpjIenx/JAF5nfaTJASAbPSIEUWVSRjjJE4L7WXOGhOCRyw9EmkPBUEb5Rl/0pyMmp2tqSV4xm82WmQTpDiD2YF8HIWMJ7Hv4P4lirfnYBrhlJBUG556nR2QrCwcWUlTr9wELI2mYndcrfSf3waCI/J9F1VzH04Idga99I0aHYU9V5RtE/MviRkVWy81rJAQNsPgIBsscu2negW4hnBp+kzAdX/BSBgFykl571kfnhMarwlF0sHwTLb6fkh6SCUnDpoex6qbCamPWLxI/Dc0kEQI86cCWEeXoqt4ivmjA0FmhKSEm4j1HkqCEpj5MinQvEkiC3GWc+3ozBYVsWSFw62G2crHOfZHmQ4EiMrgQIu70zI0R6mdJKObZgsiZf5GSBwdZMNQricMGNbPEjhl3PtdrppPadRgiwQ3mU4uMUj6mP3018jtPQddlzKguNSQS2dcUu/sqKYPXRNcvyJbGK7jmM6wTSpdDl9GZlQ3GXFcflm3V9S42GzdUE/xXKK8UyUMvsYl68tFq6nILBC8nEpPJ+a9GkzsUsirqdV9f3W7PJi79VBp1tFiF0cs/U/ePS5/4FxafxGGfKeBrftnmdk1ns8ep3JDjLs5dQftdvtUTBdQskM8YVi27jYNi6WdBDQVnE5mEx7vcWiN71dxg/6xUtrm43BR1b8bjJYbonyvM+pZwlFOF7R+Md4kS35MS8U0fFhXD/aBOJ/l5ngwG5ug8vbrlqz+eXp6cXF//m/QP+P/BGZZ8+ur/duDg8vTk8v57PWvrhL7TjlL7es6dGkXcqXx21EANFVVdyVZjBSGYm716Gs8fPf+az3D6ALel1bKhKPIQzQxvWq67bW9DChncPTN7v7cAWfEPCVkJA/fMNv7TPUq5MdLfWa7DV9I2mo+vx8Z+/s7cnsRWsfbpxXo9qHPaAf9H1swucvD2+uD95VM3ON1/RPEap233U6737deYXt8N7ezdnNDdyeuLPz6/l5B7tO1bXg/ziKX6641vxrWtOa1rSmNa1pTWta05rWtKb/WLJrt3JenD1YdcBEomVNJGjJ+y527aH3C4OiotzXVp9uTH0ve/8sTt5jR/FP0TL9RsOQ7EeG2WyrfyTfSL48Sr2gR1ncxR6MTfbBs47k93+T3i8uyO6711tIvZkcDRSlbn4zCNPfGGOLPXpJRi/epZDuj7J/44TCjT1c45fpA+ctUyr45K4OqS2Psm6NilGvOfDolmT5d4gUTZupnSn3g+iDQpPnG6Oh/NO0KWU9NCgit30Z2MW4oGjjlL31B2jIUxmnJkmMs4/SMp7R71Bq0kzPvYjQVKTdTU3XGvfTpS+bQhZkUONT1uUUUUJtcUNQEMC/I3KKIESYfao1Y5vhy7TdcThoOZZEvNwEgdTkO0M0pd2uKsVm/MaXh8ncZk0EFkkhaaT2YELOmQb91FFEPhX6Nf7Iz5fRvZV5oiP+JqNac5L2+JFv4w70Rn/cIvi/2/5MDqSVfWfk9xBqDm1/1IMzCWgyHIk7OXtE+PBT/ObwI37zblycjIbwsObfK8rm5/pw4ftbnhUU/BHXPoUKpBHeQme16WhYvg9sxW5+AEkFBtSCtl9Uij5IbeN3Jpd2b+TbNdyDmq98HA3vodGGP5oWmmxue+7nIWTKTsjf664FI5/Mi6C4GYzsr1bO921kte3Po4UNQ4dRFGi9n+0Blt3NxWjUKyuDkfvhM50vXq6NlYDfLEMC8mj0Fff+/oNXGw4hIwe/cjsagia890e4G/c+PN30p8pds0j7XvRx35fBaILg69eJ1xv9Dk328CiUrUXdtz/Grw+Ctypm0G7iHxYjaxQAP9Ci7g6DqVI2fy99qI+ncF9w3/fHAXsjYDp8mXfvhiBCQT1oBw7cPeD3C8pms11bmMGtVmgGuWDELn5DNuQXevWSp3jD5naQG9YxQ5tT+g7q9Yc9K28X+zBdhk1qdgu5fDAabQfQwqIeWHAPyLLp+Lk/TJaktNm/Jfz38ZxFi349cCBfu9H/alr+YNsdBT4q4FEEo/Ed3C/Z9xcwh+ycGWwPc0OlYDoLP78sDC0rGFLVW+hDzu7QLCiFkrkIxniWTvNfXd+C642Dei9HulFsWj2/uVnowyQOcA+2Tdz3Kev7pF/yHR8/9Vx/ezis4AHYfaxzCxZmdZByBgx9qtxjRQRXeUya3I34TI5NDirmPUYCV+GPMavrLDnbdukZbdvM2UTJIAuSqYPmloJybQ9LUQG3OYX3nXusLCl2CLXxa7f9j2AqepCE58OnBm7bwUX78Ghc9vo+8JDJeTC+BZ04UbQ23M0T4PHZVmUT92DMnKNBv1HAr3rtIVJq4w/4HzhUN3EcuPVjQHTMstK8V7bMIRggXF3b8bCanACfJ8oAnnhIsSv8ug4MMv7tNo/7OsTveXCd4QguK7rDlkVrw2EbH1tKYmfwTIYs6yI2B16+jse8gL73MMvqGKYx1mibedwIKtU1Im5oiNmIts1kltuAqOovfTyqP1iSF1JcktvUgxski5hjBcwaNOCmB54ATcZLxfb7SwwEHGAY4kYL2GSjdh2OX07Z++XmZ9bS0ELIwUB6joMwh2CwQ6yutwBl1/JQ2XU89GkI7GGH9Jqg+Xt4zAXHxa8ETRuPfgLnxPiJ+x6uYNvytqBLbUhg9EDBfaDjJDoFG9opnOf0MZNw52pYJgoglbjehrIcD7co54UhnjrDwGpam+QZmmJh8lw4NGQlamkAAAWJSURBVHGHISk48OeeSDdM3wZGtfHIR+amUjSxJJgfqBldgH61KyAX8MgDoZ1iPt2PP5BeJS9ZWBAPaAGiZfLUsALwBWkjsE6D5kC5ddpDt8+vR4YnlKnD7TyReGAMaYqIEUYDfQAdMcqT97nJ9Md0IjTGAOKk38AObY6KXrlZCup9C+v8D3W05K7JhLwKdpUwyatbSPkDpqwtTomPXPC37htY5gsOQAZWBtUdMlXbY8hvDODCFrCbNQergv7QxnYJ6vUx1J7fJHdSSm7c0LXqwcSGtMXR0Oz7HtUFyqhfxZjdkW5oWKj7JB8zGKMiTGLgiVbfph11QUQKoMh6UG8ZZjeMYkqMX+AmFwxD4sG0QYyFl0V4idXNkIC0qXxx/OlA4Edhg+s17qZkmUUeFMFWgnrBc/DoCO4AtJ02E2QhtXVYhdziDmP5acLwyDv3ytIMppMGiNYXx9vmngl5lQB1B/WWQYGZ4I5TywFdBPWwZfZu+5tsggLCIPYgSg4IHqrAOU9sN7GM+9PbYlgvWREt282vMHV4Rp3Nz+pjZvWmA6KVxzAY9xPuKogWq33ggrK769sBdLcH4h20UQ5PFduEFgdw4fyo71ExxMiBLQVr7yRS7xkIm6C4a+KaDbo+aMCo0MiyJUYC1U2y24xtLBfHJoJGP4JVwtL1oVfeBLApV7abHPiJOSVKegIzqVipM78uwEowVAcTs9bnLvsC1Mktnuh4cjFpVppw/8EHfuqwTMoGVtBkUoCtPCgZUhux+kwdDl07FHd/TOqlhqeMWYY+jfgGelkc1B6abCnyBRgM+gZPqi3ujMKVswsAiDRGuKQsPhEmFPJDcPdNMGBcDAlyYO2pdozTtDn1CnWAuNfnrPbz9x7We2CNyXS4beJZWeB3cJj1crFYtInmRUXclDNiHLNzdVg0fC2T7oPEgxXnLdXMT+RzremjTcshsxVzY4w7utXPYWMOyb6Nykjc8HSHbcoyX7lVkAmD+TrG06HuFL2pya//+0g9U8cdgoi5m96kOWTzEdg8RTaVYw98olo/8JStJRkyWpp4sjZw87UxNqv9bY/9ZYlQe07Hd0gpNyChHjP4I0xf6CqpHXJnJ4BxwxxVcHdt4jlOrTYcxPXyVsHzHRMs4xcmhgQ57BigQT7tWkd71DSbxJANxQJl0jSPlkrwGx5qA9b8WAOaFb7sbvQrfUzYMXKaFfN/G3gpDE3l+ppSPsJSt+k2+80Sxs8/Am/xSHjFy36fMMfLjfP5SZ/FK8pkrTsdm5U+OQnjhM5DwTTz1tcjrGlImfqYMMNsBl+abEb75DCBZ2JpxKbebOZB5eNRE4yKTROrLf+3MqRVQ+eD5rhyFMCKxcy7k/8tKl+PHKeZ28RGxMyzwMviiEuivd0080dTvBjfxpUvfiuyrtZxm4u+4/ThVmHcRVAfSxIZGfTpkq+HG/4yHLGgjA1Z2F+g2iLc0jA5Sktx9wYTovpscbMStuqTga3UIM2/TH5TlpMJSyHHT2pA+NPW7WRSxtIC5sKrLWlYbWlOi8uJm/eURo28LyJtdo3ltduTScHDDaDBUoTiihNoEk5tSonjZfxsa4DQFilD2sQ9qaEGFyb2YUmPWG9OJuSviAxYO/e4HWU58EQjMAqb1PvRLuDR2UveKnmT1BjG4TBjJkWs4iHGiJtAUAuuHrphDxg/7DG5NJVyaatWo3/EtTZZKkvgOlROoqA0wonHgwopxzBCekr0IEk2mYFY7X5zTI5Sr/+IQM9fh+4Sf+/lnyHb/tD8HhHfrX4Amp14dU/oxEQsy/8NyLZvnxB7XEFfjvoPhAEfSdN+vp4/iv9llseRf5T4qz9/Zerh7j5xwqdT+bvtfBRqg2Xm1T6rqfhDtl++G30/nq3pT6H/D1a/FSlOuI9fAAAAAElFTkSuQmCC'>
        </img></span>
                    <ul id="nav">
                        <li><a href="shfblv.com">About Us</a></li>
                        <li><a href="shfblv.com">Our Work</a></li>
                        <li><a href="shfblv.com">Give</a></li>
                        <li><a href="shfblv.com">Get Involved</a></li>
                        <li><a href="shfblv.com">Find Food</a></li>
                        <li><a href="shfblv.com">Contact</a></li>
                        <li><button id="siteBtn" onClick={this.showPopup}>Site Map</button></li>

                    </ul>
                    <Popup text='Site Map' closePopup={this.showPopup.bind(this)}/>
                </div>
            );
        }
        return (
            <div>
                <span>
                    <img src='data:image/png;base64,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'>
        </img></span>
                <ul id="nav">
                    <li><a href="shfblv.com">About Us</a>
                    </li>
                    <li><a href="shfblv.com">Our Work</a></li>
                    <li><a href="shfblv.com">Give</a></li>
                    <li><a href="shfblv.com">Get Involved</a></li>
                    <li><a href="shfblv.com">Find Food</a></li>
                    <li><a href="shfblv.com">Contact</a></li>
                    <li><button id="siteBtn" onClick={this.showPopup}>Site Map</button></li>

                </ul>
            </div>
        )
    }
}

export default Navbar;