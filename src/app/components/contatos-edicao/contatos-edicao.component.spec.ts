import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosEdicaoComponent } from './contatos-edicao.component';

describe('ContatosEdicaoComponent', () => {
  let component: ContatosEdicaoComponent;
  let fixture: ComponentFixture<ContatosEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosEdicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatosEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
