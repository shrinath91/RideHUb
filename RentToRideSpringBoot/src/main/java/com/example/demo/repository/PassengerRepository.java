package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.PassengerEntity;

@Repository
public interface PassengerRepository extends JpaRepository<PassengerEntity, Integer> {
	@Query("select p from PassengerEntity p where p.passenger_user_id.user_id=:uid")
	public PassengerEntity getPassByUid(int uid);
}
