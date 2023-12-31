import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosCadastroComponent } from './contatos-cadastro.component';

describe('ContatosCadastroComponent', () => {
  let component: ContatosCadastroComponent;
  let fixture: ComponentFixture<ContatosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
