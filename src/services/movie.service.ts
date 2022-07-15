/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from '../entities/movie.entity';
import { Repository } from 'typeorm';
import { MovieDTO } from './dtos/movie.dto';
import { MovieMapper } from './mappers/movie.mapper';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<MovieDTO[] | undefined> {
    const movies = await this.movieRepository.find();

    const moviesDTO: MovieDTO[] = [];

    movies.forEach((movie) => {
      moviesDTO.push(MovieMapper.fromEntityToDTO(movie));
    });

    return moviesDTO;
  }

  async findById(id: number): Promise<MovieDTO | undefined> {
    if (!id) {
      return;
    }

    const movie = await this.movieRepository.findOne({
      where: {
        id: id,
      },
    });

    return MovieMapper.fromEntityToDTO(movie);
  }

  async findByIdToDelete(id: number): Promise<MovieDTO | undefined> {
    if (!id) {
      return;
    }

    const movie = await this.movieRepository.findOne({
      where: {
        id: id,
      },
      relations: ['sharedBy']
    });

    return MovieMapper.fromEntityToDTO(movie);
  }

  async save(movieDTO: MovieDTO): Promise<MovieDTO | undefined> {
    const newMovie = MovieMapper.fromDTOtoEntity(movieDTO);
    const movieCreated = await this.movieRepository.save(newMovie);

    return MovieMapper.fromEntityToDTO(movieCreated);
  }

  async update(movieDTO: MovieDTO): Promise<MovieDTO | undefined> {
    const movieToUpdate = MovieMapper.fromDTOtoEntity(movieDTO);
    const movieUpdated = await this.movieRepository.save(movieToUpdate);

    return MovieMapper.fromEntityToDTO(movieUpdated);
  }

  async delete(movieDTO: MovieDTO): Promise<MovieDTO | undefined> {
    const movieToDelete = MovieMapper.fromDTOtoEntity(movieDTO);
    const movieDeleted = await this.movieRepository.remove(movieToDelete);

    return MovieMapper.fromEntityToDTO(movieDeleted);
  }
}
