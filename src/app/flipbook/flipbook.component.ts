import { Component, Input, OnInit } from '@angular/core';

export interface FlipBookPage {
  id: number;
  leftContent?: string;
  rightContent?: string;
  leftImage?: string;
  rightImage?: string;
}

@Component({
  selector: 'app-flipbook',
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.css']
})
export class FlipbookComponent implements OnInit {
  @Input() pages: FlipBookPage[] = [];
  @Input() width: number = 600;
  @Input() height: number = 400;
  
  currentPage: number = 0;
  isFlipping: boolean = false;
  flipDirection: 'next' | 'prev' = 'next';

  constructor() { }

  ngOnInit(): void {
    if (this.pages.length === 0) {
      this.initializeSamplePages();
    }
  }

  initializeSamplePages(): void {
    this.pages = [
      {
        id: 0,
        leftContent: '',
        rightContent: `
          <h1>Flip Book Demo</h1>
          <p>Bu Angular ile yapılmış bir flip book örneğidir.</p>
          <p>Sayfaları çevirmek için sağ veya sol tarafına tıklayın.</p>
        `
      },
      {
        id: 1,
        leftContent: `
          <h2>Sayfa 1</h2>
          <p>Bu kitabın ilk sayfasıdır.</p>
          <p>Flip book animasyonları CSS 3D transforms kullanarak yapılmıştır.</p>
        `,
        rightContent: `
          <h2>Sayfa 2</h2>
          <p>Angular komponenti olarak tasarlanmıştır.</p>
          <p>Yeniden kullanılabilir ve özelleştirilebilir.</p>
        `
      },
      {
        id: 2,
        leftContent: `
          <h2>Sayfa 3</h2>
          <p>Resim desteği de bulunmaktadır.</p>
          <p>Hem metin hem de görsel içerik ekleyebilirsiniz.</p>
        `,
        rightContent: `
          <h2>Sayfa 4</h2>
          <p>Responsive tasarıma sahiptir.</p>
          <p>Farklı ekran boyutlarına uyum sağlar.</p>
        `
      },
      {
        id: 3,
        leftContent: `
          <h2>Sayfa 5</h2>
          <p>Kolay entegrasyon için tasarlanmıştır.</p>
          <p>Sadece sayfalar array'ini geçmeniz yeterli.</p>
        `,
        rightContent: `
          <h2>Son Sayfa</h2>
          <p>Flip book tamamlandı!</p>
          <p>Başa dönmek için ilk sayfaya gidin.</p>
        `
      }
    ];
  }

  nextPage(): void {
    if (this.currentPage < this.pages.length - 1 && !this.isFlipping) {
      this.flipDirection = 'next';
      this.isFlipping = true;
      
      setTimeout(() => {
        this.currentPage++;
        this.isFlipping = false;
      }, 300);
    }
  }

  prevPage(): void {
    if (this.currentPage > 0 && !this.isFlipping) {
      this.flipDirection = 'prev';
      this.isFlipping = true;
      
      setTimeout(() => {
        this.currentPage--;
        this.isFlipping = false;
      }, 300);
    }
  }

  goToPage(pageIndex: number): void {
    if (pageIndex >= 0 && pageIndex < this.pages.length && pageIndex !== this.currentPage && !this.isFlipping) {
      this.flipDirection = pageIndex > this.currentPage ? 'next' : 'prev';
      this.isFlipping = true;
      
      setTimeout(() => {
        this.currentPage = pageIndex;
        this.isFlipping = false;
      }, 300);
    }
  }

  onLeftClick(): void {
    this.prevPage();
  }

  onRightClick(): void {
    this.nextPage();
  }

  getCurrentPage(): FlipBookPage | null {
    return this.pages[this.currentPage] || null;
  }

  getNextPage(): FlipBookPage | null {
    return this.pages[this.currentPage + 1] || null;
  }

  getPrevPage(): FlipBookPage | null {
    return this.pages[this.currentPage - 1] || null;
  }
}
