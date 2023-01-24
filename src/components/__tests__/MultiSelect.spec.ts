// @vitest-environment happy-dom

import { mount } from "@vue/test-utils";
import { test, assert, expect } from "vitest";
import MultiSelect from "../MultiSelect.vue";

const mockSelectOptionsData = [
  {
    label: "One",
  },
  {
    label: "Two",
  },
];

test("render select options", () => {
  const wrapper = mount(MultiSelect, {
    props: {
      options: mockSelectOptionsData,
    },
  });
  assert.equal(wrapper.findAll(".option").length, mockSelectOptionsData.length);
});

test("options can be selected and unselected", async () => {
  const wrapper = mount(MultiSelect, {
    props: {
      options: mockSelectOptionsData,
    },
  });
  await wrapper.get(".option").trigger("click"); // selected
  assert.equal(wrapper.findAll(".selected").length, 1);
  await wrapper.get(".option").trigger("click"); // unselected
  assert.equal(wrapper.findAll(".selected").length, 0);
});

test("v-model", async () => {
  const wrapper = mount({
    components: {
      MultiSelect,
    },
    data() {
      return {
        options: mockSelectOptionsData,
        value: [],
      };
    },
    template: `
      <MultiSelect v-model="value" :options="options" />
    `,
  });
  await wrapper
    .findComponent({ name: "MultiSelect" })
    .get(".option")
    .trigger("click");

  assert.equal(wrapper.vm.$data.value.length, 1);
});

test("default props", async () => {
  const wrapper = mount(MultiSelect);

  assert.isTrue(Array.isArray(wrapper.props().options));
  assert.equal(wrapper.props().options.length, 0);

  assert.isTrue(Array.isArray(wrapper.props().modelValue));
  assert.equal(wrapper.props().modelValue.length, 0);
});

test("pre selected values", async () => {
  const wrapper = mount(MultiSelect, {
    props: {
      modelValue: [
        {
          label: "One",
        },
      ],
    },
  });
  assert.equal(wrapper.findAll(".selected").length, 1);
});

test("option and model value format", () => {
  const wrapper = mount(MultiSelect);
  assert.equal(wrapper.props("optionText"), "label");
  assert.equal(wrapper.props("optionId"), "value");
});

test("custom data option support", async () => {
  const wrapper = mount(MultiSelect, {
    props: {
      options: [
        {
          code: "AU",
          country: "Australia",
        },
        {
          code: "NP",
          country: "Nepal",
        },
      ],
      optionText: "country",
    },
  });
  assert.equal(wrapper.findAll(".option").length, 2);
  expect(wrapper.findAll(".option")[0].text()).contain("Australia");
  expect(wrapper.findAll(".option")[1].text()).contain("Nepal");

  // testing selected value
  await wrapper.find(".option").trigger("click");
  expect(wrapper.findAll(".selected").length).toBe(1);
  expect(wrapper.find(".selector").html()).contain("Australia");
});
