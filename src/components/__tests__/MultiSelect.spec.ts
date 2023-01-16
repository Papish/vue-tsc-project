import { mount } from "@vue/test-utils";
import { test, assert } from "vitest";
import MultiSelect from "../MultiSelect.vue";

test("render options", () => {
  const options = [
    {
      label: "Name",
    },
  ];

  const wrapper = mount(MultiSelect, {
    props: {
      options,
    },
  });

  assert.equal(wrapper.findAll(".option").length, options.length);
});

test("render options can be selected and unselected", async () => {
  const options = [
    {
      label: "Option One",
    },
    {
      label: "Option Two",
    },
  ];

  const wrapper = mount(MultiSelect, {
    props: {
      options,
    },
  });

  await wrapper.get(".option").trigger("click");
  assert.equal(wrapper.findAll(".selected").length, 1);

  await wrapper.get(".option").trigger("click");
  assert.equal(wrapper.findAll(".selected").length, 0);
});
