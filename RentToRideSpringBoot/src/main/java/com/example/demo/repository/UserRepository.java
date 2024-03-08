package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
	@Query("select l from UserEntity l where username=:uname and password=:pwd")
	public Optional<UserEntity> getUserDetails(String uname, String pwd);
	
	@Modifying
	@Query(value = "update UserEntity set status = 0 where user_id = :id ",nativeQuery = true )
	public int disapproveLogin(int id);
	
	
	@Modifying
	@Query(value = "update UserEntity set status = 1 where user_id = :id ",nativeQuery = true )
	public int approveLogin(int id);
}
