var VCard = Vue.component('v-card', {
  props: ['name', 'phone', 'whatsapp'],
  template:
    '<article class="card"><h2 class="card__title">{{name}}</h2><ul class="contact-list"><li class="contact-list__button"><a :href="`tel:${phone}`"><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="icons.svg#phone"></use></svg><span>Celular</span></a></li><li class="contact-list__button" v-if="whatsapp"><a :href="`https://api.whatsapp.com/send?phone=${whatsapp}`"><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="icons.svg#whatsapp"></use></svg><span>Whatsapp</span></a></li></ul></article>'
});

var app = new Vue({
  el: '#app',
  components: {
    'v-card': VCard
  },
  data: {
    lanches: [
      {
        id: 10,
        name: 'C5 Lanches',
        phone: '85996594054'
      },
      {
        id: 13,
        name: 'Cantina do Pastor',
        phone: '85996590379',
        whatsapp: '5585996590379'
      },
      {
        id: 14,
        name: 'Jucy Salgados',
        phone: '85997876032',
        whatsapp: '5585997876032'
      },
      {
        id: 1,
        name: 'Luiz Pastel',
        phone: '85999525379',
        whatsapp: '5585999525379'
      },
      {
        id: 9,
        name: 'N-Burguer',
        phone: '85997621482',
        whatsapp: '5585997621482'
      },
      {
        id: 6,
        name: 'Pizzaria O Neném',
        phone: '85997631711',
        whatsapp: '5585996647772'
      },
      {
        id: 7,
        name: 'Top Lanches',
        phone: '85996588278',
        whatsapp: '5585996588278'
      }
    ],
    mercado: [
      {
        id: 4,
        name: 'Águia da Serra',
        phone: '85996877186',
        whatsapp: '5585996877186'
      },
      {
        id: 11,
        name: 'Comercial Bom Frango',
        phone: '85991512676',
        whatsapp: '5585999490964'
      },
      {
        id: 3,
        name: 'Mercadinho Gomes',
        phone: '8533531445',
        whatsapp: '5585999051584'
      },
      {
        id: 16,
        name: 'Mercantil Aki tá bom',
        phone: '85999747859',
        whatsapp: '5585999747859'
      },
      {
        id: 12,
        name: 'Mercantil Bem-te-vi',
        phone: '85999006021',
        whatsapp: '5585999006021'
      }
    ],
    frutas_verduras: [
      {
        id: 5,
        name: 'Romyla Veras',
        phone: '85996708082',
        whatsapp: '5585996708082'
      },
      {
        id: 15,
        name: 'Wilsinho e Gilmara',
        phone: '85999382082'
      }
    ],
    marmitaria: [
      {
        id: 8,
        name: 'Glauciane Marmitaria',
        phone: '85997443637',
        whatsapp: '5585997443736'
      }
    ],
    frigorifico: [
      {
        id: 2,
        name: 'Louro Jucá',
        phone: '85996414697',
        whatsapp: '5585996414697'
      }
    ],
    farmacia: [
      {
        id: 17,
        name: 'Farmácia José Rodrigues',
        phone: '8533531616'
      }
    ]
  }
});
