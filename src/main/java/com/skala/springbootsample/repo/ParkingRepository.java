package com.skala.springbootsample.repo;

import com.skala.springbootsample.domain.ParkingLot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingRepository extends JpaRepository<ParkingLot, Long> {
    
    // 주차장 이름으로 주차장 검색
    ParkingLot findByName(String name);
    
    // 특정 위치의 주차장 검색
    List<ParkingLot> findByLatitudeAndLongitude(double latitude, double longitude);
}
