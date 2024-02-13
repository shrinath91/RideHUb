package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Role;

@Service
public class LoginSupportService {
	@Autowired
	com.example.demo.repositories.LoginSupportRepository lrepo;
	public Login save_Login(Login l)
	{
		return lrepo.save(l);
	}
	
	public Role getUser(String uname,String pwd)
	{
		Role role=lrepo.getUser(uname, pwd);
		System.out.print(role);
		return role;
	}
}
