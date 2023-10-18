package com.acorn.melody2.repository;

import com.acorn.melody2.entity.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist, Long> {
    List<Playlist> findByuserAccountId(Long userAccountId);

//    Playlist findById(Long id);
}
