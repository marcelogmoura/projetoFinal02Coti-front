import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosConsultaComponent } from './contatos-consulta.component';

describe('ContatosConsultaComponent', () => {
  let component: ContatosConsultaComponent;
  let fixture: ComponentFixture<ContatosConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatosConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
