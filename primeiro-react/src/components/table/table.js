import React from 'react';
import '../assets/app.css';
import Coringa from '../assets/coringa.jpg';
import Django from '../assets/django.jpg';
import FordvsFerrari from '../assets/fordvsferrari.jpg';
import Mad from '../assets/mad.jpg';
import Panatera from '../assets/pantera.jpg';

export default () => {
    return(
        <div>
            <table border="2">
<thead>
    <th>Capa</th>
    <th>Filmes</th>
    <th>Gênero</th>
    <th>Ano</th>
    <th>Duração</th> 
    <th>Diretor</th>
    <th>Distribuidor</th>
</thead>
<tbody>
    <tr>
        <td><a href="https://www.amazon.com.br/Coringa-Robert-Niro-Joaquin-Phoenix/dp/B082N5V9YW/ref=pd_sim_74_5/130-2758921-2815012?_encoding=UTF8&pd_rd_i=B082N5V9YW&pd_rd_r=12d9b9fa-61c5-42e5-8885-2a458c30f2b0&pd_rd_w=GzjRg&pd_rd_wg=z2u6U&pf_rd_p=6882ebd8-e6aa-4d12-bcb6-33b39edace48&pf_rd_r=V63H9MBRKJTF8A0TYCZX&psc=1&refRID=V63H9MBRKJTF8A0TYCZX"></a></td>
        <td class = "joker">Coringa</td>
        <td class = "joker">DRAMA</td>
        <td class = "joker">2019</td>
        <td class = "joker">135</td>
        <td class = "joker">TODD PHILLIPS</td>
        <td class = "joker">WARNER HOME VIDEO</td>
    </tr>
    <tr>
        <td><a href="https://www.amazon.com.br/Ferrari-Christian-Bernthal-Caitriona-Balfe/dp/B084398TFR/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ford+vs+ferrari+filme&qid=1585936705&s=dvd&sr=1-2"><img src="imagens/fordvsferrari.jpg" height="35%" width="35%"> </a></td>
        <td class= "ford">Ford vs Ferrari</td>
        <td class= "ford">Aventura/Açâo</td>
        <td class= "ford">2019</td>
        <td class= "ford">152</td>
        <td class= "ford">JAMES MANGOLD</td>
        <td class= "ford">BUENA VISTA (DISNEY)</td>
    </tr>
    <tr>
        <td><a href ="https://www.amazon.com.br/Mad-Max-Estrada-F%C3%BAria-Blu-ray/dp/B07QVZ93YF/ref=pd_sbs_74_2/130-2758921-2815012?_encoding=UTF8&pd_rd_i=B07QVZ93YF&pd_rd_r=bfbcab49-1507-4432-b867-7470a5d96799&pd_rd_w=nyVXh&pd_rd_wg=VmI8H&pf_rd_p=4175ec30-b42d-439a-b7aa-96bb42569dc0&pf_rd_r=8MEEWAPE7BAE8W2VC24K&psc=1&refRID=8MEEWAPE7BAE8W2VC24K"></a> </td>
        <td class="mad">Mad max - ESTRADA DA FURIA </td>
        <td class="mad">FICÇAO CIENTIFICA</td>
        <td class="mad">2015</td>
        <td class="mad">120</td>
        <td class="mad" >GEORGE MILLER</td>
        <td class="mad">WARNER HOME VIDEO</td>
    </tr>
    <tr>
        <td><a href ="https://www.amazon.com.br/Django-Livre/dp/B07QWYS5QW/ref=pd_sbs_74_4/130-2758921-2815012?_encoding=UTF8&pd_rd_i=B07QWYS5QW&pd_rd_r=d0e8feef-61aa-464e-94ae-569312142e5a&pd_rd_w=a2R7L&pd_rd_wg=H2MM1&pf_rd_p=4175ec30-b42d-439a-b7aa-96bb42569dc0&pf_rd_r=HGCYKDJVMMMBPBGCHRXJ&psc=1&refRID=HGCYKDJVMMMBPBGCHRXJ"></a></td>
        <td class="django">Django livre</td>
        <td class="django">Western</td>
        <td class="django">2012</td>
        <td class="django">165</td>
        <td class="django">QUENTIN TARANTINO</td>
        <td class="django">SONY PICTURES</td>
    </tr>
    <tr>
        <td><a href="https://www.amazon.com.br/Pantera-Negra-DVD-Chadwick-Boseman/dp/B07QW2GLT3/ref=pd_rhf_dp_s_pd_crcbs_0_31?_encoding=UTF8&pd_rd_i=B07QW2GLT3&pd_rd_r=53179135-3d41-4660-add1-7f191c9c4cb9&pd_rd_w=LL0vA&pd_rd_wg=MAyv5&pf_rd_p=68d8c660-6354-4ce3-92d9-b21ee3a5147f&pf_rd_r=GQBGHCQWH1VKCACBJJGQ&psc=1&refRID=GQBGHCQWH1VKCACBJJGQ"></a></td>
        <td class ="wakanda">Pantera negra</td>
        <td class ="wakanda">AVENTURA/AÇAO</td>
        <td class ="wakanda">2018</td>
        <td class ="wakanda">134</td>
        <td class ="wakanda">RYAN COOGLER</td>
        <td class ="wakanda">BUENA VISTA (DISNEY)</td>
    </tr>
</tbody>
<tfoot >
    <tr> 
        <td></td>
    </tr>
</tfoot>
        </table>
</div>
    )
}