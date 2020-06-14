import React from 'react';

const Todo = () => (
  <div className="Todo">
    <ul>
      <li>Ilmoittaudu yliopistoon ja ylioppilaskuntaan, ohjeet löydät <Link href="https://www.utu.fi/fi/opiskelijaksi/ilmo">täältä.</Link></li>
      <li>Tilaa opiskelijakortti <Link href="https://www.frank.fi/opiskelijakortti/">Frankista</Link>, tärkeimpänä syynä 2,60€ hintainen opiskelijaruoka.</li>
      <li>Hanki asumispaikka ensimmäiselle viikolle. Kannattaa hakea asuntoa <Link href="https://tys.fi/">TYS:ltä</Link>, uudet opiskelijat ohittelevat jonossa.</li>
      <li>Osallistu varaslähtöön lauantaina 12.8. kello 12:30-> paikassa Q-talo, Nummenpuistokatu 2</li>
      <li>Tutustu orientaatioviikon aikatauluun. Aikataulu ilmestyy näille sivuille.</li>
    </ul>
  </div>
);

const Link = ({ href, children }) => (
  <a target="_blank" href={href}>
    {children}
  </a>
);

export default Todo;
