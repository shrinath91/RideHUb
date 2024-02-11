package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	
	
	@Autowired
	UserRepository urepo;
	//roleRep;
	
	public User Save(User u)//dummy d;
	{
		//user u = new user(d.grtid(),tgbgt);
		//role r = new role(rg,vet,fb);
		//rolerepo.save(r);
		//uro.save(u);
		return urepo.save(u);
	}
}
