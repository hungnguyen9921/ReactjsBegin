import useLocationForm from './Location';
import Select from 'react-select';

function LocationForm() {
      const { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit } =
            useLocationForm(false);

      const {
            cityOptions,
            districtOptions,
            wardOptions,
            selectedCity,
            selectedDistrict,
            selectedWard,
      } = state;

      return (
            <form onSubmit={onSubmit}>
                  <div className="px-[20px] flex">
                        <Select
                              name="cityId"
                              key={`cityId_${selectedCity?.value}`}
                              isDisabled={cityOptions.length === 0}
                              options={cityOptions}
                              onChange={(option) => onCitySelect(option)}
                              placeholder="Tỉnh/Thành"
                              defaultValue={selectedCity}
                              className="px-[5px] text-[14px] py-[8px] border-2 rounded w-1/2 mx-[5px] my-[5px]"
                        />

                        <Select
                              name="districtId"
                              key={`districtId_${selectedDistrict?.value}`}
                              isDisabled={districtOptions.length === 0}
                              options={districtOptions}
                              onChange={(option) => onDistrictSelect(option)}
                              placeholder="Quận/Huyện"
                              defaultValue={selectedDistrict}
                              className="px-[5px] text-[14px] py-[8px] border-2 rounded flex-auto mx-[5px] my-[5px]"
                        />
                  </div>
                  <div className="flex flex-wrap px-[20px]">
                        <div className="w-full flex">
                              <Select
                                    name="wardId"
                                    key={`wardId_${selectedWard?.value}`}
                                    isDisabled={wardOptions.length === 0}
                                    options={wardOptions}
                                    placeholder="Phường/Xã"
                                    onChange={(option) => onWardSelect(option)}
                                    defaultValue={selectedWard}
                                    className="w-1/2 px-[5px] text-[14px] py-[8px] border-2 rounded mx-[5px] my-[5px]"
                              />
                              <div className="flex-auto h-auto items-center flex px-[5px] mx-[5px] my-[5px] border-2 rounded box-border ">
                                    <input
                                          className="pl-[5px] text-[14px] py-[8px] border-2 rounded border w-full"
                                          type="text"
                                          name="namereceiver"
                                          id="namereceiver"
                                          placeholder="Số nhà, tên đường"
                                    />
                              </div>
                        </div>
                        <div className=" items-center flex w-full py-[8px] px-[5px] mx-[5px] my-[5px] border-2 rounded box-border ">
                              <input
                                    className="pl-[5px] text-[14px] py-[8px] border-2 rounded border w-full"
                                    type="text"
                                    name="namereceiver"
                                    id="namereceiver"
                                    placeholder="Email để nhận thông báo ưu đãi (Không bắt buộc)"
                              />
                        </div>
                  </div>
            </form>
      );
}

export default LocationForm;
