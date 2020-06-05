package com.qintess.ingresso.rest.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.qintess.ingresso.entity.CasaDeShow;
import com.qintess.ingresso.entity.Evento;
import com.qintess.ingresso.repository.CasaDeShowRepository;
import com.qintess.ingresso.repository.EventoRepository;

@RestController
@RequestMapping("/api")
public class EventoController {
	
	@Autowired
	private EventoRepository eventoRepos;
	
	@Autowired
	private CasaDeShowRepository casaRepos;
	
	
	@GetMapping("/evento")
	public List<Evento> getEventos(){
		
		return eventoRepos.findAll();
	}
	
	@GetMapping("/evento/{id}")
	public Evento getEventoId(@PathVariable(name = "id") int id){
		
		return eventoRepos.findById(id);
	}
	
	@PostMapping("/evento")
	public List<Evento> save(@RequestBody Evento evento , CasaDeShow casaShow ) throws Exception {
		
		casaRepos.findByNome(evento.getCasa().getNome());
			
		eventoRepos.save(evento);

		return eventoRepos.findAll();
	}
		

	@DeleteMapping("/evento/{id}")
	public void deleteEvento(@PathVariable(name = "id") int id) {
		
		eventoRepos.deleteById(id);
		
		
	}	
	
	@PutMapping("/evento/{id}")	
	public Evento putEvento(@PathVariable(name = "id") int id,
								@RequestBody Evento evento) {
		
		eventoRepos.findById(id);
		
		return eventoRepos.save(evento);
	
	}
	
	@PutMapping("/evento/{id}/imagem")	
	public List<Evento> putImg(@PathVariable(name = "id") int id,
			@RequestParam(required=false, value="imagem") MultipartFile imagem) throws IOException {
		
		byte[] bImagem;
		Evento evento = eventoRepos.findById(id);
		
		if(imagem != null && imagem.getSize() > 0) {
			bImagem = imagem.getBytes();
			evento.setImagemProd(bImagem);
		}
		eventoRepos.save(evento);
		
		return eventoRepos.findAll();
	
	}
	
	
}
