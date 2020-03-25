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
    cafe: [
      {
        name: 'Coffe Smell',
        phone: '85994349086',
        whatsapp: '5585994349086'
      }
    ],
    doces_sobremesas: [
      {
        name: 'Delícias da Érika',
        phone: '85999344242',
        whatsapp: '5585997149730'
      },
      {
        name: 'Docinhos Sonho Meu',
        phone: '85996658745',
        whatsapp: '85996658745'
      },
      {
        name: 'Point do Açaí',
        phone: '85999344242',
        whatsapp: '85999344242'
      }
    ],
    lanches: [
      {
        name: 'C5 Lanches',
        phone: '85996594054'
      },
      {
        name: 'Cantina do Pastor',
        phone: '85996590379',
        whatsapp: '5585996590379'
      },
      {
        name: 'Cozinha do Bonfim',
        phone: '85996914443',
        whatsapp: '5585996914443'
      },
      {
        name: 'Jucy Salgados',
        phone: '85997876032',
        whatsapp: '5585997876032'
      },
      { name: 'Luiz Pastel', phone: '85999525379', whatsapp: '5585999525379' },
      { name: 'N-Burguer', phone: '85997621482', whatsapp: '5585997621482' },
      {
        name: 'Pizzaria Boa Massa',
        phone: '85996224324',
        whatsapp: '5585999113627'
      },
      {
        name: 'Pizzaria O Neném',
        phone: '85997631711',
        whatsapp: '5585996647772'
      },
      {
        name: 'Rafaele Lanches',
        phone: '85997915753',
        whatsapp: '5585997915753'
      },
      {
        name: 'Sorriso Lanches',
        phone: '85991659145',
        whatsapp: '5585996992259'
      },
      { name: 'Top Lanches', phone: '85996588278', whatsapp: '5585996588278' }
    ],
    mercado: [
      {
        name: 'Águia da Serra',
        phone: '85996877186',
        whatsapp: '5585996877186'
      },
      {
        name: 'Comercial Bom Frango',
        phone: '85991512676',
        whatsapp: '5585999490964'
      },
      {
        name: 'Mercadinho Gomes',
        phone: '8533531445',
        whatsapp: '5585999051584'
      },
      {
        name: 'Mercadinho José Iran',
        phone: '85997636261',
        whatsapp: '5585997636261'
      },
      {
        name: 'Mercadinho O Cabeludo',
        phone: '85997402863',
        whatsapp: '5585997402863'
      },
      {
        name: 'Mercantil Aki tá bom',
        phone: '85999747859',
        whatsapp: '5585999747859'
      },
      {
        name: 'Mercantil Antonio do Neuton',
        phone: '8533531524',
        whatsapp: '5585999821523'
      },
      {
        name: 'Mercantil Bem-te-vi',
        phone: '85999006021',
        whatsapp: '5585999006021'
      }
    ],
    frutas_verduras: [
      {
        name: 'MTS Frutas e verduras',
        phone: '85991035689',
        whatsapp: '55885991035689'
      },
      { name: 'Romyla Veras', phone: '85996708082', whatsapp: '5585996708082' },
      {
        name: 'Wilsinho e Gilmara',
        phone: '85999382082'
      }
    ],
    marmitaria: [
      {
        name: 'Glauciane Marmitaria',
        phone: '85997443637',
        whatsapp: '5585997443736'
      },
      {
        name: 'Gurita do Nonatin',
        phone: '85999776684',
        whatsapp: '5585997782291'
      },
      {
        name: 'Marmitaria Carmelita',
        phone: '85996588471',
        whatsapp: '55885996588471'
      }
    ],
    frigorifico: [
      {
        name: 'Fernando Frutas e Frigotil',
        phone: '85991915577',
        whatsapp: '85991915577'
      },
      { name: 'Louro Jucá', phone: '85996414697', whatsapp: '5585996414697' },
      { name: 'Top Frango', phone: '885992253884', whatsapp: '85992253884' }
    ],
    farmacia: [
      {
        name: 'Farmácia José Rodrigues',
        phone: '8533531616'
      }
    ],
    agua: [
      {
        name: 'Distribuidora de Águas Levi',
        phone: '85991935971',
        whatsapp: '85999937450'
      }
    ]
  }
});
