package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Role;


@Service
public class RoleService {

	@Autowired
	com.example.demo.repositories.RoleRepository rrepo;
	
	public void save(Role r)
	{
		rrepo.save(r);
	}
	
	public Role getRole(int id) {
		try {
			Optional<Role> r = rrepo.findById(id);
			return r.get();
		}catch (Exception e) {
			return null;
		}
	}

}
