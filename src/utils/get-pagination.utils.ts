import { PaginationData } from 'src/interfaces/pagination-data.interface';
import { FindOptionsWhere, Repository } from 'typeorm';

export async function getPagination<T>(
  repository: Repository<T>,
  page?: number,
  where?: FindOptionsWhere<T>,
): Promise<PaginationData<T[]>> {
  const limit = 20;
  const count = await repository.count({
    where,
  });
  const pageNumber = page && page > 0 ? page : 1;
  const skip = limit * (pageNumber - 1);
  const take = limit;
  const data = await repository.find({ where, take, skip });
  return {
    data,
    pages: Math.ceil(count / limit),
    nextPage: count - pageNumber * limit > 0,
    previousPage: pageNumber > 1 && count > 0,
  };
}
