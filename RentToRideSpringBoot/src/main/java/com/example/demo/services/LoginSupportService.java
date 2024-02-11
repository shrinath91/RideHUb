package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repository.LoginSupportRepository;
@Service
public class LoginSupportService {
	@Autowired
	LoginSupportRepository lrepo;
	public void save_Login(Login l)
	{
		lrepo.save(l);
	}
	
	public Login getUser(String uname,String pwd)
	{
		return lrepo.getUser(uname, pwd);
	}
}
