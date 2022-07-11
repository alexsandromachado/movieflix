package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.User;

public class UserDTO {

	private Long id;
	private String name;
	private String email;
		
	public UserDTO() {
	}

	public UserDTO(String name, String email, Long id) {
		this.name = name;
		this.email = email;
		this.id = id;
	}
	
	public UserDTO(User entity) {
		name = entity.getName();
		email = entity.getEmail();
		id = entity.getId();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}