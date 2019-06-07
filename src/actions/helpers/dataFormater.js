/* eslint-disable camelcase */
export const filterData = payload => {
  const data = payload.data.length ?
    payload.data.map(
      ({
        practices,
        profile: { first_name, middle_name, last_name },
        specialties
      }) => {
        const _practices = practices.map(
          ({
            name,
            visit_address: { street, city, state, zip },
            phones,
            accepts_new_patients: accepts
          }) => ({
            medicalCenterName: name,
            acceptsNewPatients: accepts ? 'Yes' : 'NO',
            address: `${street ? street : ''}, ${city ? city : ''}, ${
              state ? state : ''
            }, ${zip ? zip : ''}`
              .replace(/\s\s+/g, ' ')
              .trim(),
            phones: phones.map(({ number }) => number).join(' , ')
          })
        );
        const name = `${first_name ? first_name : ''} ${
          middle_name ? middle_name : ''
        } ${last_name ? last_name : ''}`
          .replace(/\s\s+/g, ' ')
          .trim();
        const _specialties = specialties.map(({ name }) => name);
        return {
          practices: _practices,
          name,
          specialties: _specialties
        };
      }
    ) :
    [{ data: 'No data available' }];

  return { total: payload.meta.total, data: data };
};
