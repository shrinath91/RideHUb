package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginSupportRepository extends JpaRepository<Login, Integer> {
	@Query("select u from Login u where u.username=:uname and u.password=:pwd")
	public Login getUser(String uname,String pwd);
}
