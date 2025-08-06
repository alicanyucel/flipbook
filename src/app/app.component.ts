import { Component } from '@angular/core';
import { FlipBookPage } from './flipbook/flipbook.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flipbook';
  
  customPages: FlipBookPage[] = [
    {
      id: 0,
      leftContent: '',
      rightContent: `
        <h1>Merhaba!</h1>
        <p>Bu özel flip book örneğidir.</p>
        <p>Sayfaları çevirmek için kenarlarına tıklayın.</p>
      `
    },
    {
      id: 1,
      leftContent: `
        <h2>Sol Sayfa</h2>
        <p>Bu sol taraf içeriğidir.</p>
        <p>İstediğiniz HTML içeriği ekleyebilirsiniz.</p>
      `,
      rightContent: `
        <h2>Sağ Sayfa</h2>
        <p>Bu da sağ taraf içeriğidir.</p>
        <p>Responsive tasarıma sahiptir.</p>
      `
    },
    {
      id: 2,
      leftContent: `
        <h2>Üçüncü Sayfa</h2>
        <p>Daha fazla içerik ekleyebilirsiniz.</p>
        <p>Flip animasyonları CSS ile yapılır.</p>
      `,
      rightContent: `
        <h2>Son Sayfa</h2>
        <p>Flip book tamamlandı!</p>
        <p>Tekrar denemek için başa dönün.</p>
      `
    }
  ];
}
