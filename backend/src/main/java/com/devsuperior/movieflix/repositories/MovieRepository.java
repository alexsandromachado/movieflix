package com.devsuperior.movieflix.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
	@Query("SELECT obj FROM Movie obj WHERE "
	        + "(:genre IS NULL OR obj.genre = :genre) "
	        + "ORDER BY obj.title ASC")
	Page<Movie> findByGenre(Genre genre, Pageable pageable);
	
	@Query("SELECT new com.devsuperior.movieflix.dto.ReviewDTO( obj.id, obj.text, obj.movie.id, obj.user) FROM Review obj "
			+ "INNER JOIN obj.user "
			+ "WHERE (obj.movie.id = :movieId)")
	List<ReviewDTO> findReviewByMovieId(Long movieId);
	
}